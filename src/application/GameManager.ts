import { FigureMoveService } from "../service/FigureMoveService";

type TPlayerColor = 'white' | 'black';

export class GameManager {
    #currentPlayerColor = 'white';
    #figureMoveService: FigureMoveService;

    constructor(figureMoveService: FigureMoveService) {
        this.#figureMoveService = figureMoveService;
    }

    getCurrentPlayer() {
        return this.#currentPlayerColor;
    }

    toggleCurrentPlayer() {
        if(this.#currentPlayerColor === 'white') {
            this.#currentPlayerColor = 'black'
            return;
        }
        this.#currentPlayerColor = 'white';
    }

    isKingUnderCheck() {

    }

    isGameFinished() {

    }
}