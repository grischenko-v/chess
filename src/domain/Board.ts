import { Group } from 'three';
import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import Scene from './Scene';

const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];

//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];


class BoardCell {
    #coordinates: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;

    constructor(coordinates: string, group: CellGeometry) {
        this.#coordinates = coordinates;
        this.#cellGeometry = group;
    }

    setFigure(figure: Figure | null) {
        this.#figure = figure;
    }

    getFigure(): Figure | null {
        return this.#figure;
    }

    getCellName() {
        return this.#coordinates;
    }

    getCellCenter() {
        return this.#cellGeometry.getPosition();
    }

}

export class BoardState {
    #state: string[][] = [];
    #board: Record<string, BoardCell> = {};
    #bordUI: Group;
    #scene: Scene;

    constructor() {
        this.#scene = new Scene();
        this.#bordUI = new Group();
        this.#bordUI.receiveShadow = true;
        this.generateInitialBoard();
        this.initFigures();
        this.animate();
    }

    private generateInitialBoard() {
        let counter = 0;
        for(let [x, row] of rows.entries()) {
            this.#state.push([]);
            for(let [z, column] of columns.entries()) {
                const color = (x + z) % 2 ? 'black' : 'white';
                const cellGeometry = new CellGeometry(
                    {x: x - 3.5, z: z - 3.5}, color, `${column}${row}`
                );
                this.#board[`${column}${row}`] = new BoardCell(`${column}${row}`, cellGeometry);
                this.#bordUI.add(cellGeometry.getMesh());
            }
            counter++;
        }
        this.#scene.addObj(this.#bordUI);
    }

    private initFigures() {
        INITIAL_BLACK_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'black', 'Pawn'))
        })
    }

    private animate() {
        this.#scene.animate();
    }

    getBoard() {
        return this.#board;
    }

    getCell(coordinate: string): BoardCell {
        return this.#board[coordinate];
    }

    boardUI() {
        return this.#bordUI;
    }
}
