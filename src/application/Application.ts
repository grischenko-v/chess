import { RaycastAdapter } from "../adapters/RaycastAdapter";
import { SceneAdapter } from "../adapters/SceneAdapter";
import { columns, rows } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor, FigureType } from "../domain/Figure";
import { IEventBus } from "../infra/EventBus";
import { ICellRepository } from "../repository/CellRepository";
import { IFigureRepository } from "../repository/FiguresRepository";
import { createBoard } from "../utils/createBoard";

const BLACK_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    'Rook': ['a8', 'h8'],
    'Bishop': ['b8', 'g8'],
    'Knight': ['c8', 'f8'],
    'Queen': ['e8'],
}

const WHITE_FIGURES_INITIAL_POSITIONS: Record<FigureType, string[]> = {
    'Pawn': ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    'Rook': ['a1', 'h1'],
    'Bishop': ['b1', 'g1'],
    'Knight': ['c1', 'f1'],
    'Queen': ['e1'],
}

export class Application {
    #raycastAdapter: RaycastAdapter;
    #sceneAdapter: SceneAdapter;

    #cellRepository: ICellRepository;
    #figureRepository: IFigureRepository;
    #eventBus: IEventBus;
    #selectedFigure: Figure | null;

    constructor(cellRepository: ICellRepository, figureRepository: IFigureRepository, eventBus: IEventBus) {
        this.#cellRepository = cellRepository;
        this.#figureRepository = figureRepository;
        this.#eventBus = eventBus;

        this.#raycastAdapter = new RaycastAdapter();
        this.#sceneAdapter = new SceneAdapter();

        this.#eventBus.subscribe('cellClick', this.onCellClick.bind(this));
        this.#eventBus.subscribe('figureClick', this.onFigureClick.bind(this));
        this.#eventBus.subscribe('outsideClick', this.onOutsideClick.bind(this));
    }

    run() {
        this.createBoard();
        this.initFigures();

        this.#sceneAdapter.animate();
    }

    onFigureClick(data: { detail: { figure: Figure } }) {
        const { detail } = data;
        const { figure } = detail;

        if(this.getSelectedFigure() && this.getSelectedFigure().getName() !== figure.getName() ) {
            this.#selectedFigure.unselect();
            this.#selectedFigure = figure;
            this.#selectedFigure.select();
            return;
        }

        if(this.getSelectedFigure() && figure.getCurrentCell().getCanMove()) {
            this.caputerFigure(this.getSelectedFigure().getCurrentCell(), figure.getCurrentCell())
            return;
        }
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
            return;
        }

        this.#selectedFigure.unselect();
        this.#selectedFigure = null;
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

    private initFigure(cellName: string, color: FigureColor, type: FigureType) {
        const cell = this.#cellRepository.getCell(cellName);
        const position = cell.getCellCenter();
        const figure = new Figure(position, color, type, cell)
        cell.setFigure(figure);
        this.#sceneAdapter.draw(figure.getMesh())
        this.#figureRepository.addFigure(figure);
    }

    private initFigures() {
        Object.keys(BLACK_FIGURES_INITIAL_POSITIONS).forEach((figureType: FigureType) => {
            BLACK_FIGURES_INITIAL_POSITIONS[figureType].forEach(cellName => this.initFigure(cellName, 'black', figureType));
        })
        Object.keys(WHITE_FIGURES_INITIAL_POSITIONS).forEach((figureType: FigureType) => {
            WHITE_FIGURES_INITIAL_POSITIONS[figureType].forEach(cellName => this.initFigure(cellName, 'white', figureType));
        })
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