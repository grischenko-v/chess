import { Group } from 'three';
import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import Scene from './Scene';
import Plane from '../ui/board/Plane';
import BorderLarge from '../ui/board/BorderLarge';
import BorderSmall from '../ui/board/BorderSmall';
import { BoardCell } from './BoardCell';
import { columns, rows } from '../constants';

// Black
const INITIAL_BLACK_PAWN_POSITIONS = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
//White
const INITIAL_WHITE_PAWN_POSITIONS = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

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
            cell.setFigure(new Figure(position, 'black', 'Pawn', cell));
            this.#scene.addObj(cell.getFigureMesh())
        });

        INITIAL_WHITE_PAWN_POSITIONS.forEach(pownCell => {
            const cell = this.getCell(pownCell);
            const position = cell.getCellCenter();
            cell.setFigure(new Figure(position, 'white', 'Pawn', cell));
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
        const startCell = this.getCell(start);
        const figure = startCell.getFigure();

        if(!figure) {
            return;
        }

        figure.move(endCell);
        startCell.setFigure(null);
        endCell.setFigure(figure);
    }

    getScene() {
        return this.#scene;
    }
}
