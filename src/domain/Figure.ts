import { Vector3 } from "three";
import { FigureUI, figureUIFactory } from "../ui/figures/FiguresFactory";
import { BoardCell } from "./BoardCell";
import { cellRepository } from "../repository/CellRepository";

export type FigureColor = 'white' | 'black';
export type FigureType = 'Pawn' | 'Rook' | 'Bishop' | 'Knight' | 'Queen';

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

    getMesh() {
        return this.#figure.getMesh();
    }

    getType() {
        return this.#type;
    }

    getName() {
        return this.#name;
    }

    getStepNumber() {
        return this.#stepNumber;
    }

    move(newCell: BoardCell) {
        this.#figure.move(newCell.getCellCenter());
        this.setCurrentCell(newCell);
        this.#stepNumber++;
    }

    private getAvalibleMoveCells() {
        return moveStrategy[this.#type](this.#currentCell, this);
    }

    getCurrentCell() {
        return this.#currentCell;
    }

    setCurrentCell(cell: BoardCell) {
        this.#currentCell = cell;
    }

    select() {
        this.#figure.select();
        const avalibleCells = this.getAvalibleMoveCells();
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(true));
    }

    unselect() {
        const avalibleCells = this.getAvalibleMoveCells();
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
        this.#figure.unselect();
    }
}

const getPawnAvalibleCells = (currentCell: BoardCell, figure: Figure): BoardCell[] => {
    const result = [];
    const topCellName = figure.getColor() === 'white' ? currentCell.getTopSibling() : currentCell.getBottomSibling();
    const topCell = cellRepository.getCell(topCellName);
    if(topCell && !topCell.hasFigure()) {
        result.push(topCell);
    }
    if(figure.getStepNumber() === 0 && topCell && !topCell.hasFigure()) {
        const topTopCellName = figure.getColor() === 'white' ? topCell.getTopSibling() : topCell.getBottomSibling();
        const topTopCell = cellRepository.getCell(topTopCellName);
        result.push(topTopCell);
    }
    
    const topLeftSiblingName = figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomRightSibling();
    const topLeftCell = cellRepository.getCell(topLeftSiblingName);
    if(topLeftCell && topLeftCell.hasFigure() && topLeftCell.hasFigureColor() !== figure.getColor()) {
        result.push(topLeftCell);
    }

    const topRightSiblingName = figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomLeftSibling();
    const topRightCell = cellRepository.getCell(topRightSiblingName);
    if(topRightCell && topRightCell.hasFigure() && topRightCell.hasFigureColor() !== figure.getColor()) {
        result.push(topRightCell);
    }
    return result;
}

const getCellsByDirection = (currentCell: BoardCell, figure: Figure, getNextCell: (currentCell: BoardCell) => string) => {
    const result = [];
    let cellName = getNextCell(currentCell);
    let cell = cellRepository.getCell(cellName);
    let nextCellName = getNextCell(currentCell);
    let nextCell = cellRepository.getCell(nextCellName);
    while(cell && !cell.hasFigure() || cell && cell.hasFigure() && cell.getFigure().getColor() !== figure.getColor()) {
        result.push(cell);
        if(cell && cell.hasFigure() && cell.getFigure().getColor() !== figure.getColor() || !nextCell) {
            break;
        }
        cell = nextCell;
        nextCellName = getNextCell(cell);
        nextCell = cellRepository.getCell(nextCellName);
    }
    return result;
}

type TGetCellStrategy = 'line' | 'diagonale' | 'all';

const getCellsStrategy: Record<TGetCellStrategy, (currentCell: BoardCell, figure: Figure) => BoardCell[]> = {
    'line': (currentCell: BoardCell, figure: Figure) => {
        const cellsOnTop = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopSibling() : currentCell.getBottomSibling());
    
        const cellsOnBottom = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomSibling() : currentCell.getTopSibling());
        const cellsOnLeft = getCellsByDirection(
                currentCell,
                figure,
                (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getLeftSibling() : currentCell.getRightSibling());
        const cellsOnRight = getCellsByDirection(
                currentCell,
                figure,
                (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getRightSibling() : currentCell.getLeftSibling());
        return [...cellsOnTop, ...cellsOnBottom, ...cellsOnLeft, ...cellsOnRight];
    },
    'diagonale': (currentCell: BoardCell, figure: Figure) => {
        const cellsOnTopLeft = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomLeftSibling());
        const cellsOnTopRight = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomRightSibling());
        const cellsOnBottomLeft = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomLeftSibling() : currentCell.getTopLeftSibling());
        const cellsOnBottomRight = getCellsByDirection(
            currentCell,
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomRightSibling() : currentCell.getTopRightSibling());
        return [...cellsOnTopLeft, ...cellsOnTopRight, ...cellsOnBottomRight, ...cellsOnBottomLeft];
    },
    'all': (currentCell: BoardCell, figure: Figure) => {
        return [...getCellsStrategy['line'](currentCell, figure), ...getCellsStrategy['diagonale'](currentCell, figure)];
    }
} as const;


const moveStrategy: Record<FigureType, (currentCell: BoardCell, figure: Figure) => BoardCell[]> = {
    'Pawn': getPawnAvalibleCells,
    'Rook': getCellsStrategy['line'],
    'Bishop': getCellsStrategy['diagonale'],
    'Knight': getCellsStrategy['diagonale'],
    'Queen': getCellsStrategy['all'],
}