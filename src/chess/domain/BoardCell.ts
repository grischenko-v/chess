import { Figure, type FigureColor } from './Figure';
import { type CELL_COLOR_TYPE, CellGeometry } from '../ui/board/CellGeometry';
import { BOARD_CELL_COLOR, boardMatrix } from '../constants';

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
    #figure: Figure | null = null;
    #cellGeometry: CellGeometry;
    #siblings: TSiblings;
    #canmove = false;
    #color: CELL_COLOR_TYPE;
    #row: string;

    constructor( row: string, column: string, boardCoords: {x: number, z: number}) {
        this.#name = `${row}${column}`;
        this.#row = row;
        this.#color = (boardCoords.x + boardCoords.z) % 2 ? 'white' : 'black';
        this.#cellGeometry = new CellGeometry(
            {x: boardCoords.x - 3.5, z: boardCoords.z - 3.5}, this.#color, this.#name 
        );
        this.#siblings = this.initCellSublings(this.#name);
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
        return this.#figure !== null;
    }

    hasFigureColor() {
       return this.#figure?.getColor() ?? '';
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

    getCellRow() {
        return this.#row;
    }

    getCellPosition() {
        return this.#cellGeometry.getPosition();
    }

    canEnPassantCupture(figureColor: FigureColor) {
        if(!this.hasFigure() || !this.#figure) {
            return false;
        }
        const figure = this.getFigure();
        if(!figure) {
            return false;
        }
        return figure.getType() === 'Pawn'
             && figure.getColor() !== figureColor
             && figure.getStepNumber() === 1 
    }

	private initCellSublings(cellName: string): TSiblings {
		let cellI = 0 , cellJ = 0;
		for(let i = 0; i < boardMatrix.length; i++) {
			for(let j = 0; j < boardMatrix[i].length; j++) {
				if(boardMatrix[i][j] === cellName) {
					cellI = i;
					cellJ = j;
				}
			}
		}

		return {
			bottom: boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ] : null,
			top: boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ] : null,
			left: boardMatrix[cellI][cellJ - 1] ?? null,
			right: boardMatrix[cellI][cellJ + 1] ?? null,
			bottomLeft:  boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ - 1] : null,
			bottomRight:  boardMatrix[cellI + 1] ? boardMatrix[cellI + 1][cellJ + 1] : null,
			topLeft:  boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ - 1] : null,
			topRight:  boardMatrix[cellI - 1] ? boardMatrix[cellI - 1][cellJ + 1] : null,
		}
	}
}
