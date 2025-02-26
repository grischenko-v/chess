import { Object3D } from "three";
import { RaycastAdapter } from "../adapters/RaycastAdapter";
import { SceneAdapter } from "../adapters/SceneAdapter";
import { columns, rows } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { eventBus } from "../infra/EventBus";
import { ICellRepository } from "../repository/CellRepository";
import { IFigureRepository } from "../repository/FiguresRepository";
import { createBoard } from "../utils/createBoard";

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

export class Application {
    #raycastAdapter: RaycastAdapter;
    #sceneAdapter: SceneAdapter;

    #cellRepository: ICellRepository;
    #figureRepository: IFigureRepository;
    #selectedFigure: Figure | null;

    constructor(cellRepository: ICellRepository, figureRepository: IFigureRepository) {
        this.#cellRepository = cellRepository;
        this.#figureRepository = figureRepository;

        this.#raycastAdapter = new RaycastAdapter();
        this.#sceneAdapter = new SceneAdapter();

        this.createBoard();
        this.initFigures();
    
        this.#sceneAdapter.animate();

        eventBus.subscribe('cellClick', this.onCellClick.bind(this));
        eventBus.subscribe('figureClick', this.onFigureClick.bind(this));
        eventBus.subscribe('outsideClick', this.onOutsideClick.bind(this));
    }

    onFigureClick(data: { detail: { figure: Figure } }) {
        const { detail } = data;
        const { figure } = detail;
        if(this.getSelectedFigure()) {
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = figure;
        this.#selectedFigure.select();
    }

    onCellClick(data: { detail: { cell: BoardCell } }) {
        const { detail } = data;
        const { cell: destinationCell } = detail;
        if(!this.#selectedFigure) {
            return;
        }

        const currentCell = this.#selectedFigure.getCurrentCell();

        if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== this.#selectedFigure.getColor()) {
            this.caputerFigure(currentCell, destinationCell)
            return;
        }

        if(destinationCell.getCanMove()) {
            this.moveFigure(currentCell, destinationCell);
        }
    }

    onOutsideClick() {
        if(this.getSelectedFigure()) {
            this.#selectedFigure.unselect();
            this.#selectedFigure = null;
        }
    }

    getSelectedFigure() {
        return this.#selectedFigure;
    }

    moveFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        if(!this.#selectedFigure) {
            return;
        }
        this.#selectedFigure.unselect();
        this.#selectedFigure.move(destinationCell);
        currentCell.setFigure(null);
        destinationCell.setFigure(this.#selectedFigure);
        this.#selectedFigure = null;
    }

    caputerFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        this.#sceneAdapter.remove(capturedFigure.getMesh());
        this.#figureRepository.deleteFigure(capturedFigure);

        this.moveFigure(currentCell, destinationCell);
    }

    private initFigures() {
        INITIAL_BLACK_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.#cellRepository.getCell(pownCell);
            const position = cell.getCellCenter();
            const figure = new Figure(position, 'black', 'Pawn', cell)
            cell.setFigure(figure);
            this.#sceneAdapter.draw(figure.getMesh())
            this.#figureRepository.addFigure(figure);
        });
        
        INITIAL_WHITE_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.#cellRepository.getCell(pownCell);
            const position = cell.getCellCenter();
            const figure = new Figure(position, 'white', 'Pawn', cell)
            cell.setFigure(figure);
            this.#sceneAdapter.draw(figure.getMesh())
            this.#figureRepository.addFigure(figure);
        });
    }

    private createBoard() {
        const board = createBoard();
        this.#sceneAdapter.draw(board);

        for(let [x, row] of rows.entries()) {
            for(let [z, column] of columns.entries()) {
                const cell = new BoardCell(`${column}${row}`, {x, z});
                this.#cellRepository.addCell(cell)
                this.#sceneAdapter.draw(cell.getMesh());
            }
        }
    }
}