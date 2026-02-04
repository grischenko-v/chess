import { Vector3 } from "three";
import { FigureUI, figureUIFactory } from "../ui/figures/FiguresFactory";
import { BoardCell } from "./BoardCell";
import { FIGURE_COLOR } from "../constants";

export type FigureColor = keyof typeof FIGURE_COLOR;
export type FigureType = 'Pawn' | 'Rook' | 'Bishop' | 'Knight' | 'Queen' | 'King';

export class Figure {
    #color: FigureColor;
    #type: FigureType
    #figure: FigureUI;
    #currentCell: BoardCell;
    #name: string;
    #stepNumber = 0;

    constructor(position: Vector3, color: FigureColor, type: FigureType, cell: BoardCell) {
        this.#color = color;
        this.#type = type;
        this.#name = `${type}_${cell.getCellName()}`
        this.#figure = figureUIFactory[type]({
            position: position,
            color: this.#color,
            name: this.#name
        })
        this.#currentCell = cell;
    }

    getColor() {
        return this.#color;
    }

    getFigure() {
        return this.#figure;
    }

    getType() {
        return this.#type;
    }

	setType(type: FigureType) {
		this.#type = type;
	}

    getName() {
        return this.#name;
    }

    getStepNumber() {
        return this.#stepNumber;
    }

    move(newCell: BoardCell) {
        this.#figure.move(newCell.getCellPosition());
        this.setCurrentCell(newCell);
        this.#stepNumber++;
    }

	revert(newCell: BoardCell) {
		this.#figure.move(newCell.getCellPosition());
        this.setCurrentCell(newCell);
		this.#stepNumber--;
	}

    getCurrentCell() {
        return this.#currentCell;
    }

    setCurrentCell(cell: BoardCell) {
        this.#currentCell = cell;
    }

    select() {
        this.#figure.select();
    }

    unselect() {
        this.#figure.unselect();
    }
}
