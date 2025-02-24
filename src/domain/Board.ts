import { Group, Object3D } from 'three';
import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import Scene from './Scene';
import Plane from '../ui/board/Plane';
import BorderLarge from '../ui/board/BorderLarge';
import BorderSmall from '../ui/board/BorderSmall';

const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];


class BoardCell {
    #name: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;
    #topSibling: string;
    #bottomSibling: string;
    #leftSibling: string;
    #rightSibling: string;

    constructor(name: string, group: CellGeometry) {
        this.#name = name;
        this.#cellGeometry = group;
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
    #state: string[][] = [];
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

        let counter = 0;
        for(let [x, row] of rows.entries()) {
            this.#state.push([]);
            for(let [z, column] of columns.entries()) {
                const color = (x + z) % 2 ? 'white' : 'black';
                const cellGeometry = new CellGeometry(
                    {x: x - 3.5, z: z - 3.5}, color, `${column}${row}`
                );
                this.#cells[`${column}${row}`] = new BoardCell(`${column}${row}`, cellGeometry);
                this.#ui.add(cellGeometry.getMesh());
            }
            counter++;
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
