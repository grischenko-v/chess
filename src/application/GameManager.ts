import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor } from "../domain/Figure";
import { figureRepository } from "../repository/FiguresRepository";
import { FigureMoveService } from "../service/FigureMoveService";

export class GameManager {
    #currentPlayerColor: FigureColor = 'white';
    #figureMoveService: FigureMoveService;

    constructor(figureMoveService: FigureMoveService) {
        this.#figureMoveService = figureMoveService;
    }

    getCurrentPlayer() {
        return this.#currentPlayerColor;
    }

    toggleCurrentPlayer() {
        if (this.#currentPlayerColor === 'white') {
            this.#currentPlayerColor = 'black'
            return;
        }
        this.#currentPlayerColor = 'white';
    }

    private getCurrentKing() {
        const kings = figureRepository.getFiguresByType('King');
        const currentKing = kings.find(king => king.getColor() === this.getCurrentPlayer());
        return currentKing;
    }

    private getfiguresWithAttackedCells() {
        const figures = this.#currentPlayerColor === 'black' ?
            figureRepository.getFiguresByColor('white') : figureRepository.getFiguresByColor('black');

        const figuresWithAttackedCells = figures.flatMap(figure => {
            return {
                figure: figure,
                cells: this.#figureMoveService.getCaptureCells(figure)
            }
        })

        return figuresWithAttackedCells;
    }

    isKingUnderCheck(): boolean {
        const kingCell = this.getCurrentKing().getCurrentCell();
        const cellUnderCapturebyFigure = this.getfiguresWithAttackedCells();
        return cellUnderCapturebyFigure.flatMap(cellsbyFigure => cellsbyFigure.cells).includes(kingCell);
    }

    isGameFinished(): boolean {
        const figures = this.#currentPlayerColor === 'black' ?
            figureRepository.getFiguresByColor('white') : figureRepository.getFiguresByColor('black');
        const avalibleMoves = figures.flatMap(figure => {
            const movies = this.#figureMoveService.getAvalibleMoveCells(figure)
            return this.filterAvalibleCellsByKingCheck(movies, figure);
        });

        return avalibleMoves.length === 0;
    }

    filterAvalibleCellsByKingCheck(avalibleCells: BoardCell[], figure: Figure) {
        let isKingUnderCheck = this.isKingUnderCheck();
        const currentFigureCell = figure.getCurrentCell();
        const kingCell = this.getCurrentKing().getCurrentCell();
        const attacedFigures = this.getfiguresWithAttackedCells()
            .filter(item => item.cells.includes(kingCell))
            .map(item => item.figure);
        return avalibleCells.filter(cell => {
            if (cell.hasFigure()) {
                return !isKingUnderCheck || attacedFigures.includes(cell.getFigure());
            }
            currentFigureCell.setFigure(null);
            cell.setFigure(figure);
            figure.setCurrentCell(cell);
            const isChecked = this.isKingUnderCheck();
            currentFigureCell.setFigure(figure);
            figure.setCurrentCell(currentFigureCell);
            cell.setFigure(null);
            return !isChecked;
        })
    }

    highliteMoves(figure: Figure) {
        const avalibleCells = this.#figureMoveService.getAvalibleMoveCells(figure);
        this.filterAvalibleCellsByKingCheck(avalibleCells, figure).forEach((cell: BoardCell) => cell.setCanMove(true));
    }

    unhighliteMoves(figure: Figure) {
        const avalibleCells = this.#figureMoveService.getAvalibleMoveCells(figure);
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
    }

    upgradePawn() {

    }
}