import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureType } from "../domain/Figure";
import { cellRepository } from "../repository/CellRepository";

interface IFigureMoveService {
    highliteMoves: (figure: Figure) => void;
    unhighliteMoves: (figure: Figure) => void;
}

export class FigureMoveService implements IFigureMoveService {
    highliteMoves(figure: Figure) {
        const avalibleCells = this.getAvalibleMoveCells(figure);
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(true));
    };
    unhighliteMoves(figure: Figure) {
        const avalibleCells = this.getAvalibleMoveCells(figure);
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
    };

    private getAvalibleMoveCells(figure: Figure) {
        const figureType = figure.getType();
        return moveStrategy[figureType](figure);
    };
}

const getPawnAvalibleCells = (figure: Figure): BoardCell[] => {
    const currentCell = figure.getCurrentCell();
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

const getCellsByDirection = (figure: Figure, getNextCell: (currentCell: BoardCell) => string) => {
    const currentCell = figure.getCurrentCell();
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

const getCellsStrategy: Record<TGetCellStrategy, (figure: Figure) => BoardCell[]> = {
    'line': (figure: Figure) => {
        const cellsOnTop = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopSibling() : currentCell.getBottomSibling());
    
        const cellsOnBottom = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomSibling() : currentCell.getTopSibling());
        const cellsOnLeft = getCellsByDirection(
                figure,
                (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getLeftSibling() : currentCell.getRightSibling());
        const cellsOnRight = getCellsByDirection(
                figure,
                (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getRightSibling() : currentCell.getLeftSibling());
        return [...cellsOnTop, ...cellsOnBottom, ...cellsOnLeft, ...cellsOnRight];
    },
    'diagonale': (figure: Figure) => {
        const cellsOnTopLeft = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomLeftSibling());
        const cellsOnTopRight = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomRightSibling());
        const cellsOnBottomLeft = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomLeftSibling() : currentCell.getTopLeftSibling());
        const cellsOnBottomRight = getCellsByDirection(
            figure,
            (currentCell: BoardCell) => figure.getColor() === 'white' ? currentCell.getBottomRightSibling() : currentCell.getTopRightSibling());
        return [...cellsOnTopLeft, ...cellsOnTopRight, ...cellsOnBottomRight, ...cellsOnBottomLeft];
    },
    'all': (figure: Figure) => {
        return [...getCellsStrategy['line'](figure), ...getCellsStrategy['diagonale'](figure)];
    }
} as const;


const moveStrategy: Record<FigureType, (figure: Figure) => BoardCell[]> = {
    'Pawn': getPawnAvalibleCells,
    'Rook': getCellsStrategy['line'],
    'Bishop': getCellsStrategy['diagonale'],
    'Knight': getCellsStrategy['diagonale'],
    'Queen': getCellsStrategy['all'],
}