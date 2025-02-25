import { RaycastAdapter } from "../adapters/RaycastAdapter";
import { Board } from "../domain/Board";

export class Application {
    #raycastAdapter: RaycastAdapter;
    #board: Board;

    constructor() {
        this.#board = new Board();
        this.#raycastAdapter = new RaycastAdapter(this.#board.getScene());
    }

    moveFigure(from: string, to: string) {
        this.#board.moveFigure(from, to);
    }
}