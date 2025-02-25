import { Vector3 } from "three";
import { createFigureFactory, FigureBase } from "../ui/figures/FiguresFactory";
import { BoardCell } from "./BoardCell";

export type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #color: FigureColor;
    #type: FigureType
    #figure: FigureBase;
    #currentCell: BoardCell;

    constructor(position: Vector3, color: FigureColor, type: FigureType, cell: BoardCell) {
        this.#color = color;
        this.#type = type;
        this.#figure = createFigureFactory({
            type: this.#type,
            position: position,
            color: this.#color,
        })
        this.#currentCell = cell;
    }

    getMesh() {
        return this.#figure.getMesh();
    }

    getType() {
        return this.#type;
    }

    move(newCell: BoardCell) {
        this.#figure.move(newCell.getCellCenter());
        this.setCurrentCell(newCell);
    }

    getPosition() {
        return this.#figure.getPosition();
    }

    getCurrentCell() {
        return this.#currentCell;
    }

    setCurrentCell(cell: BoardCell) {
        this.#currentCell = cell;
    }

}
