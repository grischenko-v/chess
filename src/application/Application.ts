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

        eventBus.subscribe('intercect', (data) => {
            const { detail } = data;
            if(!detail) {
                return;
            }

            const figureName = detail.object.parent.name

            const figure = this.#figureRepository.getFigure(figureName);
            if(!figure) {
                return; 
            }

            if(this.#selectedFigure && this.#selectedFigure.getName() === figureName) {
                this.#selectedFigure.unselect();
                this.#selectedFigure = null;
                return;
            }

            if(this.#selectedFigure) {
                this.#selectedFigure.unselect();
                this.#selectedFigure = null;
            }

            this.#selectedFigure = figure;
            figure.select();
        });
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

    moveFigure(from: string, to: string) {
        const startCell = this.#cellRepository.getCell(to);
        const figure = startCell.getFigure();
        const endCell = this.#cellRepository.getCell(from);

        if(!figure) {
            return;
        }

        figure.move(endCell);
        startCell.setFigure(null);
        endCell.setFigure(figure);
    }
}