import { Object3D } from 'three';
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

console.log(getCellSublings('a1'));

export class BoardCell {
    #name: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;
    #siblings: TSiblings;

    constructor(name: string, group: CellGeometry) {
        this.#name = name;
        this.#cellGeometry = group;
        this.#siblings = getCellSublings(name);
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
