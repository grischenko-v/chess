import { Group } from 'three';
import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import Plane from '../ui/board/Plane';
import BorderLarge from '../ui/board/BorderLarge';
import BorderSmall from '../ui/board/BorderSmall';
import { BoardCell } from './BoardCell';
import { columns, rows } from '../constants';
import { scene, IScene } from '../infra/Scene';

export class Board {
    #cells: Record<string, BoardCell> = {};
    #ui: Group;
    #scene: IScene;

    constructor() {
        this.#scene = scene;
        this.#ui = new Group();
        this.#ui.receiveShadow = true;
        this.generateBoardUI();;
    }

    private generateBoardUI() {
        this.#ui.add(new Plane().getMesh());

        for(let [x, row] of rows.entries()) {
            for(let [z, column] of columns.entries()) {
                this.#cells[`${column}${row}`] = new BoardCell(`${column}${row}`, {x, z});
                const cellGeometry = this.getCell(`${column}${row}`);
                this.#ui.add(cellGeometry.getMesh());
            }
        }

        this.#ui.add(new BorderLarge(({x: 0, z: 4.25})).getMesh());
        this.#ui.add(new BorderLarge(({x: 0, z: -4.25})).getMesh());

        this.#ui.add(new BorderSmall(({x: 4.25, z: 0})).getMesh());
        this.#ui.add(new BorderSmall(({x: -4.25, z: 0})).getMesh());
        this.#scene.addObject(this.#ui);
        this.#scene.animate();
    }

    getCell(coordinate: string): BoardCell {
        return this.#cells[coordinate];
    }
}
