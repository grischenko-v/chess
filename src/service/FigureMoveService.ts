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
    const topCellName = figure.getColor() === 'white' ? currentCell.getTopSibling() : currentCell.getBottomSibling();
    const topCell = cellRepository.getCell(topCellName);
    if(canMove(figure.getColor(), topCell)) {
        result.push(topCell);
    }
    if(figure.getStepNumber() === 0 && canMove(figure.getColor(), topCell)) {
        const topTopCellName = figure.getColor() === 'white' ? topCell.getTopSibling() : topCell.getBottomSibling();
        const topTopCell = cellRepository.getCell(topTopCellName);
        if(canMove(figure.getColor(), topTopCell)) {
            result.push(topTopCell);
        }
    }
    
    const topLeftSiblingName = figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomRightSibling();
    const topLeftCell = cellRepository.getCell(topLeftSiblingName);
    if(canCapture(figure.getColor(), topLeftCell)) {
        result.push(topLeftCell);
    }

    const topRightSiblingName = figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomLeftSibling();
    const topRightCell = cellRepository.getCell(topRightSiblingName);
    if(canCapture(figure.getColor(), topRightCell)) {
        result.push(topRightCell);
    }
    return result;
}

const getKnightAvalibleCells = (figure: Figure): BoardCell[] => {
    const result: BoardCell[] = [];
    const currentCell = figure.getCurrentCell();
    
    // top right cell from figure
    const topRightCellName = figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomLeftSibling();
    const topRightCell = cellRepository.getCell(topRightCellName);

    if(topRightCell) {
        const topCellName = figure.getColor() === 'white' ? topRightCell.getTopSibling() : topRightCell.getBottomSibling();
        const topCell = cellRepository.getCell(topCellName);
        if(canMoveOrCapture(figure.getColor(), topCell)) {
            result.push(topCell)
        }

        const rightCellName = figure.getColor() === 'white' ? topRightCell.getRightSibling() : topRightCell.getLeftSibling();
        const rightCell = cellRepository.getCell(rightCellName);
        if(canMoveOrCapture(figure.getColor(), rightCell)) {
            result.push(rightCell)
        }
    }
    
    // topLeftCell from figure
    const topLeftCellName = figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomRightSibling();
    const topLeftCell = cellRepository.getCell(topLeftCellName);

    if(topLeftCell) {
        const topCellName2 = figure.getColor() === 'white' ? topLeftCell.getTopSibling() : topLeftCell.getBottomSibling();
        const topCell2 = cellRepository.getCell(topCellName2);
        if(canMoveOrCapture(figure.getColor(), topCell2)) {
            result.push(topCell2)
        }
        
        const rightCellName2 = figure.getColor() === 'white' ? topLeftCell.getLeftSibling() : topLeftCell.getRightSibling();
        const rightCell2 = cellRepository.getCell(rightCellName2);
        if(canMoveOrCapture(figure.getColor(), rightCell2)) {
            result.push(rightCell2)
        }
    }

    // bottom Right
    const bottomRightCellName = figure.getColor() === 'white' ? currentCell.getBottomRightSibling() : currentCell.getTopLeftSibling();
    const bottomRightCell = cellRepository.getCell(bottomRightCellName);

    if(bottomRightCell) {
    
        const topCellName3 = figure.getColor() === 'white' ? bottomRightCell.getBottomSibling() : bottomRightCell.getTopSibling();
        const topCell3 = cellRepository.getCell(topCellName3);
        if(canMoveOrCapture(figure.getColor(), topCell3)) {
            result.push(topCell3)
        }

        const rightCellName3 = figure.getColor() === 'white' ? bottomRightCell.getRightSibling() : bottomRightCell.getLeftSibling();
        const rightCell3 = cellRepository.getCell(rightCellName3);
        if(canMoveOrCapture(figure.getColor(), topCell3)) {
            result.push(rightCell3)
        }
    }

    // bottom Left
    const bottomLeftCellName = figure.getColor() === 'white' ? currentCell.getBottomLeftSibling() : currentCell.getTopRightSibling();
    const bottomLeftCell = cellRepository.getCell(bottomLeftCellName);

    if(bottomLeftCell) {
    
        const topCellName3 = figure.getColor() === 'white' ? bottomLeftCell.getBottomSibling() : bottomLeftCell.getTopSibling();
        const topCell3 = cellRepository.getCell(topCellName3);
        if(canMoveOrCapture(figure.getColor(), topCell3)) {
            result.push(topCell3)
        }

        const rightCellName3 = figure.getColor() === 'white' ? bottomLeftCell.getLeftSibling() : bottomLeftCell.getRightSibling();
        const rightCell3 = cellRepository.getCell(rightCellName3);
        if(canMoveOrCapture(figure.getColor(), rightCell3)) {
            result.push(rightCell3)
        }
    }

    return result
}

const getKingAvalibleCells = (figure: Figure): BoardCell[] => {
    const result: BoardCell[] = [];
    const currentCell = figure.getCurrentCell();

    const topCellName = figure.getColor() === 'white' ? currentCell.getTopSibling() : currentCell.getBottomSibling();
    const topCell = cellRepository.getCell(topCellName);
    if(canMoveOrCapture(figure.getColor(), topCell)) {
        result.push(topCell);
    }
    const botomCellName = figure.getColor() === 'white' ? currentCell.getBottomSibling() : currentCell.getTopSibling();
    const bottomCell = cellRepository.getCell(botomCellName);
    if(canMoveOrCapture(figure.getColor(), bottomCell)) {
        result.push(bottomCell);
    }
    const rightCellName = figure.getColor() === 'white' ? currentCell.getLeftSibling() : currentCell.getRightSibling();
    const rightCell = cellRepository.getCell(rightCellName);
    if(canMoveOrCapture(figure.getColor(), rightCell)) {
        result.push(rightCell);
    }
    const leftCellName = figure.getColor() === 'white' ? currentCell.getRightSibling() : currentCell.getLeftSibling();
    const leftCell = cellRepository.getCell(leftCellName);
    if(canMoveOrCapture(figure.getColor(), leftCell)) {
        result.push(leftCell);
    }

    const leftTopCellName = figure.getColor() === 'white' ? currentCell.getTopLeftSibling() : currentCell.getBottomRightSibling();
    const leftTopCell = cellRepository.getCell(leftTopCellName);
    if(canMoveOrCapture(figure.getColor(), leftTopCell)) {
        result.push(leftTopCell);
    }

    const rightTopCellName = figure.getColor() === 'white' ? currentCell.getTopRightSibling() : currentCell.getBottomLeftSibling();
    const rightTopCell = cellRepository.getCell(rightTopCellName);
    if(canMoveOrCapture(figure.getColor(), rightTopCell)) {
        result.push(rightTopCell);
    }

    const leftBottomCellName = figure.getColor() === 'white' ? currentCell.getBottomLeftSibling() : currentCell.getTopRightSibling();
    const leftBottomCell = cellRepository.getCell(leftBottomCellName);
    if(canMoveOrCapture(figure.getColor(), leftBottomCell)) {
        result.push(leftBottomCell);
    }

    const rightBottomCellName = figure.getColor() === 'white' ? currentCell.getBottomRightSibling() : currentCell.getTopLeftSibling();
    const rightBottomCell = cellRepository.getCell(rightBottomCellName);
    if(canMoveOrCapture(figure.getColor(), rightBottomCell)) {
        result.push(rightBottomCell);
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
    while(canMoveOrCapture(figure.getColor(), cell)) {
        result.push(cell);
        if(canCapture(figure.getColor(), cell) || !nextCell) {
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
    'Knight': getKnightAvalibleCells,
    'Queen': getCellsStrategy['all'],
    'King': getKingAvalibleCells,
}