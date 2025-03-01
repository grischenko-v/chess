import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor, FigureType } from "../domain/Figure";
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

const canMove = (_figureColor:  FigureColor, cell?: BoardCell) => cell && !cell.hasFigure();

const canCapture = (figureColor:  FigureColor, cell?: BoardCell) => cell && cell.hasFigure() && cell.getFigure().getColor() !== figureColor;

const canMoveOrCapture = (figureColor:  FigureColor, cell?: BoardCell) => canMove(figureColor, cell) || canCapture(figureColor,cell);

const getPawnAvalibleCells = (figure: Figure): BoardCell[] => {
    const currentCell = figure.getCurrentCell();
    const result = [];
    const topCellName = currentCell.getTopSibling(figure.getColor());
    const topCell = cellRepository.getCell(topCellName);
    if(canMove(figure.getColor(), topCell)) {
        result.push(topCell);
    }
    if(figure.getStepNumber() === 0 && canMove(figure.getColor(), topCell)) {
        const topTopCellName = topCell.getTopSibling(figure.getColor());
        const topTopCell = cellRepository.getCell(topTopCellName);
        if(canMove(figure.getColor(), topTopCell)) {
            result.push(topTopCell);
        }
    }
    
    const topLeftSiblingName = currentCell.getTopLeftSibling(figure.getColor());
    const topLeftCell = cellRepository.getCell(topLeftSiblingName);
    if(canCapture(figure.getColor(), topLeftCell)) {
        result.push(topLeftCell);
    }

    const topRightSiblingName = currentCell.getTopRightSibling( figure.getColor());
    const topRightCell = cellRepository.getCell(topRightSiblingName);
    if(canCapture(figure.getColor(), topRightCell)) {
        result.push(topRightCell);
    }
    return result;
}

const addMoveOrCaptureCellToArray = (array: BoardCell[], figureColor: FigureColor, cellName: string) => {
    const cell = cellRepository.getCell(cellName);
    if(canMoveOrCapture(figureColor, cell)) {
        array.push(cell);
    }
} 

const getKnightAvalibleCells = (figure: Figure): BoardCell[] => {
    const result: BoardCell[] = [];
    const currentCell = figure.getCurrentCell();

    // top right cell from figure
    const topRightCellName = currentCell.getTopRightSibling(figure.getColor());
    const topRightCell = cellRepository.getCell(topRightCellName);

    if(topRightCell) {
        const posibleAvalibleCells = [topRightCell.getBottomSibling(figure.getColor()), topRightCell.getLeftSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }
    
    // topLeftCell from figure
    const topLeftCellName = currentCell.getTopLeftSibling(figure.getColor());
    const topLeftCell = cellRepository.getCell(topLeftCellName);

    if(topLeftCell) {
        const posibleAvalibleCells = [topLeftCell.getBottomSibling(figure.getColor()), topLeftCell.getLeftSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }

    // bottom Right
    const bottomRightCellName = currentCell.getBottomRightSibling(figure.getColor());
    const bottomRightCell = cellRepository.getCell(bottomRightCellName);
    if(bottomRightCell) {
        const posibleAvalibleCells = [bottomRightCell.getBottomSibling(figure.getColor()), bottomRightCell.getLeftSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }

    // bottom Left
    const bottomLeftCellName = currentCell.getBottomLeftSibling(figure.getColor());
    const bottomLeftCell = cellRepository.getCell(bottomLeftCellName);
    if(bottomLeftCell) {
        const posibleAvalibleCells = [bottomLeftCell.getBottomSibling(figure.getColor()), bottomLeftCell.getLeftSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }

    return result
}

const getKingAvalibleCells = (figure: Figure): BoardCell[] => {
    const result: BoardCell[] = [];
    const currentCell = figure.getCurrentCell();
    const posibleAvalibleCells = [
        currentCell.getTopSibling(figure.getColor()),
        currentCell.getBottomSibling(figure.getColor()),
        currentCell.getLeftSibling(figure.getColor()),
        currentCell.getRightSibling(figure.getColor()),
        currentCell.getTopLeftSibling(figure.getColor()),
        currentCell.getTopRightSibling(figure.getColor()),
        currentCell.getBottomLeftSibling(figure.getColor()),
        currentCell.getBottomRightSibling(figure.getColor())
    ]
    posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));

    return result;
}

type TCellSibiling = 'getTopSibling' | 'getBottomSibling' | 'getLeftSibling' | 'getRightSibling' | 'getTopLeftSibling' | 'getTopRightSibling' | 'getBottomLeftSibling' | 'getBottomRightSibling';

const getCellsByDirection = (figure: Figure, siblingName: TCellSibiling) => {
    const currentCell = figure.getCurrentCell();
    const result = [];
    let cellName = currentCell[siblingName](figure.getColor());
    let cell = cellRepository.getCell(cellName);
    let nextCellName = currentCell[siblingName](figure.getColor());
    let nextCell = cellRepository.getCell(nextCellName);
    while(canMoveOrCapture(figure.getColor(), cell)) {
        result.push(cell);
        if(canCapture(figure.getColor(), cell) || !nextCell) {
            break;
        }
        cell = nextCell;
        nextCellName = cell[siblingName](figure.getColor());
        nextCell = cellRepository.getCell(nextCellName);
    }
    return result;
}

type TGetCellStrategy = 'line' | 'diagonale' | 'all';

const getAvalibleCellsByDirection: Record<TGetCellStrategy, (figure: Figure) => BoardCell[]> = {
    'line': (figure: Figure) => {
        const cellsOnTop = getCellsByDirection(figure, 'getTopSibling');
        const cellsOnBottom = getCellsByDirection(figure, 'getBottomSibling');
        const cellsOnLeft = getCellsByDirection(figure, 'getLeftSibling');
        const cellsOnRight = getCellsByDirection(figure, 'getRightSibling');
        return [...cellsOnTop, ...cellsOnBottom, ...cellsOnLeft, ...cellsOnRight];
    },
    'diagonale': (figure: Figure) => {
        const cellsOnTopLeft = getCellsByDirection(figure, 'getTopLeftSibling');
        const cellsOnTopRight = getCellsByDirection(figure, 'getTopRightSibling');
        const cellsOnBottomLeft = getCellsByDirection(figure, 'getBottomLeftSibling');
        const cellsOnBottomRight = getCellsByDirection(figure,  'getBottomRightSibling');
        return [...cellsOnTopLeft, ...cellsOnTopRight, ...cellsOnBottomRight, ...cellsOnBottomLeft];
    },
    'all': (figure: Figure) => {
        return [...getAvalibleCellsByDirection['line'](figure), ...getAvalibleCellsByDirection['diagonale'](figure)];
    }
} as const;

const moveStrategy: Record<FigureType, (figure: Figure) => BoardCell[]> = {
    'Pawn': getPawnAvalibleCells,
    'Rook': getAvalibleCellsByDirection['line'],
    'Bishop': getAvalibleCellsByDirection['diagonale'],
    'Knight': getKnightAvalibleCells,
    'Queen': getAvalibleCellsByDirection['all'],
    'King': getKingAvalibleCells,
}