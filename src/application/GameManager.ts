import { BLACK_FIGURES_INITIAL_POSITIONS } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor } from "../domain/Figure";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { FigureMoveService, getCellsByDirection } from "../service/FigureMoveService";

export class GameManager {
    #currentPlayerColor: FigureColor = 'white';
    #figureMoveService: FigureMoveService;

    constructor(figureMoveService: FigureMoveService) {
        this.#figureMoveService = figureMoveService;
    }

    getCurrentPlayer() {
        return this.#currentPlayerColor;
    }

    getSecondaryPlayer() {
        if(this.#currentPlayerColor === 'white') {
            return'black'
        }
        return 'white';
    }

    toggleCurrentPlayer() {
        if(this.#currentPlayerColor === 'white') {
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

    getAttackedCells() {
        const figures = this.#currentPlayerColor === 'black' ?
            figureRepository.getFiguresByColor('white') : figureRepository.getFiguresByColor('black');

        const atteackedCells = Object.keys(figures).flatMap(key => {
            return {
                figure: figures[key as any],
                cells: this.#figureMoveService.getCaptureCells(figures[key as any])
            }
        })

        return atteackedCells;
    }

    isKingUnderCheck(): boolean {
        const kingCell = this.getCurrentKing().getCurrentCell();
        const cellUnderCapture = this.getAttackedCells();
        return cellUnderCapture.flatMap(cells => cells.cells).includes(kingCell);
    }

    isGameFinished(): boolean {
        const figures = this.#currentPlayerColor === 'white' ?
            figureRepository.getFiguresByColor('white') : figureRepository.getFiguresByColor('black');
        const avalibleMoves = Object.keys(figures).flatMap(key => {
            const movies = this.#figureMoveService.getAvalibleMoveCells(figures[key as any])
            return this.filterAvalibaleMoves(movies, figures[key as any]);
        });

        return avalibleMoves.length === 0;
    }

    filterAvalibaleMoves(avalibleCells: BoardCell[], figure: Figure) {
        let isKingUnderCheck = this.isKingUnderCheck();
        const currentFigureCell = figure.getCurrentCell();
        const kingCell = this.getCurrentKing().getCurrentCell();
        const attacedFigures = this.getAttackedCells()
            .filter(item => item.cells.includes(kingCell))
            .map(item => item.figure);
        return avalibleCells.filter(cell => {
            if(cell.hasFigure()) {
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
        this.filterAvalibaleMoves(avalibleCells, figure).forEach((cell: BoardCell) => cell.setCanMove(true));
    }

    unhighliteMoves(figure: Figure) {
        const avalibleCells = this.#figureMoveService.getAvalibleMoveCells(figure);
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
    }

    upgradePawn() {

    }
}