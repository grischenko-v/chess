import { Vector3 } from "three";
import { createFigureFactory, FigureBase } from "../ui/figures/FiguresFactory";
import { BoardCell } from "./BoardCell";
import { cellRepository } from "../repository/CellRepository";

export type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #color: FigureColor;
    #type: FigureType
    #figure: FigureBase;
    #currentCell: BoardCell;
    #name: string;
    #stepNumber = 0;

    constructor(position: Vector3, color: FigureColor, type: FigureType, cell: BoardCell) {
        this.#color = color;
        this.#type = type;
        this.#name = `Pawn_${cell.getCellName()}`
        this.#figure = createFigureFactory({
            type: this.#type,
            position: position,
            color: this.#color,
            name: this.#name
        })
        this.#currentCell = cell;
    }

    getColor() {
        return this.#color;
    }

    getMesh() {
        return this.#figure.getMesh();
    }

    getType() {
        return this.#type;
    }

    getName() {
        return this.#name;
    }

    move(newCell: BoardCell) {
        this.#figure.move(newCell.getCellCenter());
        this.setCurrentCell(newCell);
        this.#stepNumber++;
    }

    getAvalibleMoveCells() {
        return PawnMoveStrategy.getAvalibleCells(this.#currentCell, this.#stepNumber);
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

    select() {
        this.#figure.select();
    }

    unselect() {
        this.#figure.unselect();
    }

}

abstract class MoveStrategy {
    static getAvalibleCells: (currentCell: BoardCell, stepNumber?: number) => BoardCell[];
}

class PawnMoveStrategy extends MoveStrategy {

    static getAvalibleCells(currentCell: BoardCell, stepNumber: number): BoardCell[] {
        const result = [];
        const topCellName = currentCell.getTopSibling();
        const topCell = cellRepository.getCell(topCellName);
        if(topCell && !topCell.hasFigure()) {
            result.push(topCell);
        }
        if(stepNumber === 0 ) {
            const topTopCellName = topCell.getTopSibling();
            const topTopCell = cellRepository.getCell(topTopCellName);
            result.push(topTopCell);
        }
        const topLeftSiblingName = currentCell.getTopLeftSibling();
        const topLeftCell = cellRepository.getCell(topLeftSiblingName);
        if(topLeftCell && topLeftCell.hasFigure()) {
            result.push(topLeftCell);
        }

        const topRightSiblingName = currentCell.getTopRightSibling();
        const topRightCell = cellRepository.getCell(topRightSiblingName);
        if(topRightCell && topRightCell.hasFigure()) {
            result.push(topRightCell);
        }
        return result;
    }
}