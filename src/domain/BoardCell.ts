import { Figure, FigureColor } from './Figure';
import { CELL_COLOR_TYPE, CellGeometry } from '../ui/board/CellGeometry';
import { getCellSublings } from '../utils/getCellSiblings';
import { BOARD_CELL_COLOR } from '../constants';

export type TSiblings = {
    bottom: string | null,
    top: string | null,
    left: string | null,
    right: string | null,
    bottomLeft: string | null,
    bottomRight: string | null,
    topLeft: string | null,
    topRight: string | null,
}

export class BoardCell {
    #name: string;
    #figure: Figure | null;
    #cellGeometry: CellGeometry;
    #siblings: TSiblings;
    #canmove = false;
    #color: CELL_COLOR_TYPE;

    constructor(name: string, boardCoords: {x: number, z: number}) {
        this.#name = name;
        this.#color = (boardCoords.x + boardCoords.z) % 2 ? 'white' : 'black';
        this.#cellGeometry = new CellGeometry(
            {x: boardCoords.x - 3.5, z: boardCoords.z - 3.5}, this.#color, name
        );
        this.#siblings = getCellSublings(name);
    }

    getTopSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.top : this.#siblings.bottom;
    }

    getBottomSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.bottom : this.#siblings.top ;
    }

    getTopLeftSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.topLeft : this.#siblings.bottomRight;
    }

    getTopRightSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.topRight : this.#siblings.bottomLeft;
    }

    getBottomLeftSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.bottomLeft : this.#siblings.topRight ;
    }

    getBottomRightSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.bottomRight : this.#siblings.topLeft;
    }

    getLeftSibling(figureColor: FigureColor) {
        return figureColor === 'black' ?  this.#siblings.left : this.#siblings.right;
    }

    getRightSibling(figureColor: FigureColor) {
        return figureColor === 'black' ? this.#siblings.right : this.#siblings.left;
    }

    getCanMove() {
        return this.#canmove;
    }

    setDefualtColor() {
        this.changeColor(BOARD_CELL_COLOR[this.#color]);
    }

    setCanMove(canMove: boolean) {
        this.#canmove = canMove;
        
        if(this.#canmove && this.hasFigure()) {
            this.changeColor(BOARD_CELL_COLOR.capture);
            return;
        }

        if(this.#canmove) {
            this.changeColor(BOARD_CELL_COLOR.canMove);
            return;
        }

        this.setDefualtColor();
    }

    changeColor(color: number) {
        const mesh = this.getMesh();
        mesh.material.color.setHex(color);
    }

    setFigure(figure: Figure | null) {
        this.#figure = figure;
    }

    hasFigure() {
        return !!this.#figure;
    }

    hasFigureColor() {
        if(!this.hasFigure()) {
            return '';
        }
        return this.#figure.getColor();
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

    getCellPosition() {
        return this.#cellGeometry.getPosition();
    }
}
