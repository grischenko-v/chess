import { Figure } from './Figure';
import { CellGeometry } from '../ui/board/CellGeometry';
import { getCellSublings } from '../utils/getCellSiblings';

export type TSiblings = {
    bottom: string | null,
    top: string | null,
    left: string | null,
    right: string | null,
    bottomLeft:  string | null,
    bottomRight:  string | null,
    topLeft: string | null,
    topRight: string | null,
}

export class BoardCell {
    #name: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;
    #siblings: TSiblings;

    constructor(name: string, boardCoords: {x: number, z: number}) {
        this.#name = name;
        const color = (boardCoords.x + boardCoords.z) % 2 ? 'white' : 'black';
        this.#cellGeometry = new CellGeometry(
            {x: boardCoords.x - 3.5, z: boardCoords.z - 3.5}, color, name
        );
        this.#siblings = getCellSublings(name);
    }

    setFigure(figure: Figure | null) {
        this.#figure = figure;
    }

    getFigure(): Figure | null {
        return this.#figure;
    }

    getMesh() {
        return this.#cellGeometry.getMesh();
    }

    getCellName() {
        return this.#name;
    }

    getCellCenter() {
        return this.#cellGeometry.getPosition();
    }
}
