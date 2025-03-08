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
            return this.#figureMoveService.getAvalibleMoveCells(figures[key as any])
        })

        // console.log(atteackedCells);
        return atteackedCells;
    }

    isKingUnderCheck(): boolean {
        const kingCell = this.getCurrentKing().getCurrentCell();
        const testCells = this.getAttackedCells();
        // console.log(testCells.includes(kingCell));
        return testCells.includes(kingCell);
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
        return avalibleCells.filter(cell => {
            currentFigureCell.setFigure(null);
            cell.setFigure(figure);
            figure.setCurrentCell(cell);
            isKingUnderCheck = this.isKingUnderCheck();
            console.log(isKingUnderCheck);
            currentFigureCell.setFigure(figure);
            figure.setCurrentCell(currentFigureCell);
            cell.setFigure(null);
            return !isKingUnderCheck;
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