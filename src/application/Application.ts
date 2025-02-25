import { RaycastAdapter } from "../adapters/RaycastAdapter";
import { Board } from "../domain/Board";
import { Figure } from "../domain/Figure";
import { eventBus } from "../infra/EventBus";
import { scene, IScene } from "../infra/Scene";

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

export class Application {
    #raycastAdapter: RaycastAdapter;
    #board: Board;
    #scene: IScene

    constructor() {
        this.#scene = scene;
        this.#board = new Board();
        this.#raycastAdapter = new RaycastAdapter();

        this.initFigures();
        this.#scene.animate();

        eventBus.subscribe('intercect', console.log)
    }

    private initFigures() {
        INITIAL_BLACK_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.#board.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'black', 'Pawn', cell));
            this.#scene.addObject(cell.getFigureMesh())
        });
        
        INITIAL_WHITE_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.#board.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'white', 'Pawn', cell));
            this.#scene.addObject(cell.getFigureMesh())
        });
    }

    moveFigure(from: string, to: string) {
        const startCell = this.#board.getCell(to);
        const figure = startCell.getFigure();
        const endCell = this.#board.getCell(from);

        if(!figure) {
            return;
        }

        figure.move(endCell);
        startCell.setFigure(null);
        endCell.setFigure(figure);
    }
}