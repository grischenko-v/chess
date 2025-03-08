import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor, FigureType } from "../domain/Figure";
import { cellRepository } from "../repository/CellRepository";

interface IFigureMoveService {
    getAvalibleMoveCells: (figure: Figure) => BoardCell[];
    getCaptureCells: (figure: Figure) =>  BoardCell[];
}

export class FigureMoveService implements IFigureMoveService {
    getAvalibleMoveCells(figure: Figure) {
        const figureType = figure.getType();
        return moveStrategy[figureType](figure);
    };

    getCaptureCells(figure: Figure) {
        const figureType = figure.getType();
        return captureStrategy[figureType](figure);
    };
}

const canMove = (_figureColor:  FigureColor, cell?: BoardCell) => cell && !cell.hasFigure();

const canCapture = (figureColor:  FigureColor, cell?: BoardCell) => cell && cell.hasFigure() && cell.getFigure().getColor() !== figureColor;

const canMoveOrCapture = (figureColor:  FigureColor, cell?: BoardCell) => canMove(figureColor, cell) || canCapture(figureColor,cell);

const getPawnCanMoveCells = (pawn: Figure): BoardCell[] => {
    const currentCell = pawn.getCurrentCell();
    const result = [];
    const topCellName = currentCell.getTopSibling(pawn.getColor());
    const topCell = cellRepository.getCell(topCellName);
    if(canMove(pawn.getColor(), topCell)) {
        result.push(topCell);
    }
    if(pawn.getStepNumber() === 0 && canMove(pawn.getColor(), topCell)) {
        const topTopCellName = topCell.getTopSibling(pawn.getColor());
        const topTopCell = cellRepository.getCell(topTopCellName);
        if(canMove(pawn.getColor(), topTopCell)) {
            result.push(topTopCell);
        }
    }
    return result;
}

const getPawnCuptureCells = (pawn: Figure):BoardCell[] => {
    const currentCell = pawn.getCurrentCell();
    const result = [];
    const topLeftSiblingName = currentCell.getTopLeftSibling(pawn.getColor());
    const topLeftCell = cellRepository.getCell(topLeftSiblingName);
    if(canCapture(pawn.getColor(), topLeftCell)) {
        result.push(topLeftCell);
    }

    const topRightSiblingName = currentCell.getTopRightSibling( pawn.getColor());
    const topRightCell = cellRepository.getCell(topRightSiblingName);
    if(canCapture(pawn.getColor(), topRightCell)) {
        result.push(topRightCell);
    }
    return result;
}

const getPawnAvalibleCells = (pawn: Figure): BoardCell[] => 
    [...getPawnCanMoveCells(pawn), ...getPawnCuptureCells(pawn)];

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
        const posibleAvalibleCells = [topRightCell.getTopSibling(figure.getColor()), topRightCell.getRightSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }
    
    // topLeftCell from figure
    const topLeftCellName = currentCell.getTopLeftSibling(figure.getColor());
    const topLeftCell = cellRepository.getCell(topLeftCellName);

    if(topLeftCell) {
        const posibleAvalibleCells = [topLeftCell.getTopSibling(figure.getColor()), topLeftCell.getLeftSibling(figure.getColor())];
        posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, figure.getColor(), cell));
    }

    // bottom Right
    const bottomRightCellName = currentCell.getBottomRightSibling(figure.getColor());
    const bottomRightCell = cellRepository.getCell(bottomRightCellName);
    if(bottomRightCell) {
        const posibleAvalibleCells = [bottomRightCell.getBottomSibling(figure.getColor()), bottomRightCell.getRightSibling(figure.getColor())];
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

const getKingAvalibleCells = (king: Figure): BoardCell[] => {
    const result: BoardCell[] = [];
    const currentCell = king.getCurrentCell();
    const kingColor = king.getColor();
    const posibleAvalibleCells = [
        currentCell.getTopSibling(kingColor),
        currentCell.getBottomSibling(kingColor),
        currentCell.getLeftSibling(kingColor),
        currentCell.getRightSibling(kingColor),
        currentCell.getTopLeftSibling(kingColor),
        currentCell.getTopRightSibling(kingColor),
        currentCell.getBottomLeftSibling(kingColor),
        currentCell.getBottomRightSibling(kingColor)
    ]
    posibleAvalibleCells.forEach(cell => addMoveOrCaptureCellToArray(result, kingColor, cell));

    if(king.getStepNumber() > 0) {
        return result;
    }
    // roque
    const cellsOnRight = getCellsByDirection(king, kingColor === 'white' ? 'getLeftSibling' : 'getRightSibling');
    const cellsOnLeft = getCellsByDirection(king, kingColor === 'white' ? 'getRightSibling' : 'getLeftSibling');
    const leftRookCell = cellRepository.getCell(kingColor == 'white' ? 'a1' : 'a8');
    const rightRookCell = cellRepository.getCell(kingColor == 'white' ? 'h1' : 'h8');

    const leftRook = leftRookCell.getFigure();
    const rightRook = rightRookCell.getFigure();

    if(cellsOnRight.length === 3 && rightRook && rightRook.getType() === 'Rook' && rightRook.getStepNumber() === 0) {
        result.push(...cellsOnRight);
    }

    if(cellsOnLeft.length === 4 && leftRook && leftRook.getType() === 'Rook' && leftRook.getStepNumber() === 0) {
        cellsOnLeft.splice(3, 1);
        result.push(...cellsOnLeft);
    }

    return result;
}

type TCellSibiling = 'getTopSibling' | 'getBottomSibling' | 'getLeftSibling' | 'getRightSibling' | 'getTopLeftSibling' | 'getTopRightSibling' | 'getBottomLeftSibling' | 'getBottomRightSibling';

export const getCellsByDirection = (figure: Figure, siblingName: TCellSibiling) => {
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
    },
} as const;

const moveStrategy: Record<FigureType, (figure: Figure) => BoardCell[]> = {
    'Pawn': getPawnAvalibleCells,
    'Rook': getAvalibleCellsByDirection['line'],
    'Bishop': getAvalibleCellsByDirection['diagonale'],
    'Knight': getKnightAvalibleCells,
    'Queen': getAvalibleCellsByDirection['all'],
    'King': getKingAvalibleCells,
}

const captureStrategy: Record<FigureType, (figure: Figure) => BoardCell[]> = {
    'Pawn': getPawnCuptureCells,
    'Rook': getAvalibleCellsByDirection['line'],
    'Bishop': getAvalibleCellsByDirection['diagonale'],
    'Knight': getKnightAvalibleCells,
    'Queen': getAvalibleCellsByDirection['all'],
    'King': getKingAvalibleCells,
}