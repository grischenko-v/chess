import { Group, Object3D } from 'three';
import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import Scene from './Scene';
import Plane from '../ui/board/Plane';
import BorderLarge from '../ui/board/BorderLarge';
import BorderSmall from '../ui/board/BorderSmall';

const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

const getBoardMatrix = (): string[][] => {
    const boardMatrix = [];
    let counter = 0;
    for(let [x, row] of rows.entries()) {
        boardMatrix.push([]);
        for(let [z, column] of columns.entries()) {
            boardMatrix[counter].push(`${column}${row}`);
        }
        counter++;
    }
    return boardMatrix;
}

const boardMatrix = getBoardMatrix();
console.log(boardMatrix);

type TSiblings = {
    bottom: string | null,
    top: string | null,
    left: string | null,
    right: string | null,
    bottomLeft:  string | null,
    bottomRight:  string | null,
    topLeft: string | null,
    topRight: string | null,
}

const getSublings = (cellName: string): TSiblings => {
    let cellI, cellJ;
    for(let i = 0; i < boardMatrix.length; i++) {
        for(let j = 0; j < boardMatrix[i].length; j++) {
            if(boardMatrix[i][j] === cellName) {
                cellI = i;
                cellJ = j;
            }
        }
    }

    return {
        bottom: boardMatrix[cellI + 1][cellJ] ?? null,
        top: boardMatrix[cellI - 1][cellJ] ?? null,
        left: boardMatrix[cellI][cellJ - 1] ?? null,
        right: boardMatrix[cellI][cellJ + 1] ?? null,
        bottomLeft:  boardMatrix[cellI + 1][cellJ - 1],
        bottomRight:  boardMatrix[cellI + 1][cellJ + 1],
        topLeft:  boardMatrix[cellI - 1][cellJ - 1],
        topRight:  boardMatrix[cellI - 1][cellJ + 1],
    }
}

console.log(getSublings('a3'));

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];


class BoardCell {
    #name: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;
    #siblings: TSiblings;

    constructor(name: string, group: CellGeometry) {
        this.#name = name;
        this.#cellGeometry = group;
        this.#siblings = getSublings(name);
    }

    setFigure(figure: Figure | null) {
        this.#figure = figure;
    }

    getFigure(): Figure | null {
        return this.#figure;
    }

    getFigureMesh(): Object3D | null {
        const figure = this.getFigure();
        if(figure) {
            return figure.getMesh();
        }
        return null;
    }

    getCellName() {
        return this.#name;
    }

    getCellCenter() {
        return this.#cellGeometry.getPosition();
    }
}

export class Board {
    #cells: Record<string, BoardCell> = {};
    #ui: Group;
    #scene: Scene;
    #selectedFigure: Figure | null;

    constructor() {
        this.#scene = new Scene();
        this.#ui = new Group();
        this.#ui.receiveShadow = true;
        this.generateBoardUI();
        this.initFigures();
        this.animate();
    }

    private generateBoardUI() {
        this.#ui.add(new Plane().getMesh());

        for(let [x, row] of rows.entries()) {
            for(let [z, column] of columns.entries()) {
                const color = (x + z) % 2 ? 'white' : 'black';
                const cellGeometry = new CellGeometry(
                    {x: x - 3.5, z: z - 3.5}, color, `${column}${row}`
                );
                this.#cells[`${column}${row}`] = new BoardCell(`${column}${row}`, cellGeometry);
                this.#ui.add(cellGeometry.getMesh());
            }
        }

        this.#ui.add(new BorderLarge(({x: 0, z: 4.25})).getMesh());
        this.#ui.add(new BorderLarge(({x: 0, z: -4.25})).getMesh());

        this.#ui.add(new BorderSmall(({x: 4.25, z: 0})).getMesh());
        this.#ui.add(new BorderSmall(({x: -4.25, z: 0})).getMesh());
        this.#scene.addObj(this.#ui);
    }

    private initFigures() {
        INITIAL_BLACK_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'black', 'Pawn'));
            this.#scene.addObj(cell.getFigureMesh())
        });

        INITIAL_WHITE_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'white', 'Pawn'));
            this.#scene.addObj(cell.getFigureMesh())
        });
    }

    private animate() {
        this.#scene.animate();
    }

    getCell(coordinate: string): BoardCell {
        return this.#cells[coordinate];
    }

    setSelectedFigure(figure: Figure) {
        this.#selectedFigure = figure;
    }

    unSelectFigure() {
        this.#selectedFigure = null;
    }

    moveFigure(start: string, end: string) {
        const endCell = this.getCell(end);
        const endCellCenter = endCell.getCellCenter();

        const startCell = this.getCell(start);
        const figure = startCell.getFigure();

        if(!figure) {
            return;
        }

        figure.move(endCellCenter);
        startCell.setFigure(null);
        endCell.setFigure(figure);
    }
}
