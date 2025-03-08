import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor } from "../domain/Figure";
import { cellRepository } from "../repository/CellRepository";
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

    getFiguresAtackedKing(figure: Figure) {
            const figureType = figure.getType();
            console.log(figureType);
            console.log(figure.getColor());
            return [...this.#figureMoveService.getFigureMoveStrategyByFigureType('Queen')(figure),
                ...this.#figureMoveService.getFigureMoveStrategyByFigureType('Knight')(figure),
                ...this.#figureMoveService.getFigureMoveStrategyByFigureType('Pawn')(figure)]
                .filter(cell => cell.hasFigure() && cell.getFigure().getColor() !== figure.getColor());
        }

    isKingUnderCheck(): BoardCell[] {
        const currentKing = this.getCurrentKing();

        console.log(this.getFiguresAtackedKing(currentKing));

        return []
    }

    highliteMoves(figure: Figure) {
        const avalibleCells = this.#figureMoveService.getAvalibleMoveCells(figure);
        const boardCopy = cellRepository.getBoardCopy();
        // boardCopy[]

        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(true));
    }

    unhighliteMoves(figure: Figure) {
        const avalibleCells = this.#figureMoveService.getAvalibleMoveCells(figure);
        avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
    }

    upgradePawn() {

    }
}