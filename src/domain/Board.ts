import { Figure } from './Figure';

const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];

//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];


class BoardCell {
    #coordinates: string;
    #figure: Figure | null;

    constructor(coordinates: string) {
        this.#coordinates = coordinates;
    }

    setFigure(figure: Figure | null) {
        this.#figure = figure;
    }

    getFigure(): Figure | null {
        return this.#figure;
    }

    getCoordinates() {
        return this.#coordinates;
    }
}

export class BoardState {
    #state: string[][] = [];
    #board: Record<string, BoardCell> = {};

    constructor() {
        this.generateInitialBoard();
        this.initFigures();
    }

    private generateInitialBoard() {
        let counter = 0;
        for(let row of rows) {
            this.#state.push([]);
            for(let column of columns) {
                this.#board[`${column}${row}`] = new BoardCell(`${column}${row}`);
            }
            counter++;
        }
    }

    private initFigures() {
        INITIAL_BLACK_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.getCell(pownCell);
            cell.setFigure(new Figure(pownCell, 'black', 'Pawn'))
        })
    }

    getBoard() {
        return this.#board;
    }

    getCell(coordinate: string): BoardCell {
        return this.#board[coordinate];
    }
}
