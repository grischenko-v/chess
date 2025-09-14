import { BOARD_CELL_COLOR } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure, FigureColor } from "../domain/Figure";
import { eventBus } from "../infra/EventBus";
import { figureRepository } from "../repository/FiguresRepository";
import { FigureMoveService } from "../service/FigureMoveService";

export class GameManager {
    #currentPlayerColor: FigureColor = 'white';
    #figureMoveService: FigureMoveService;

    constructor() {
        this.#figureMoveService = new FigureMoveService();
        eventBus.subscribe('gameFinished', this.onGameFinished.bind(this));
        eventBus.subscribe('checked', this.onChecked.bind(this))
    }

    getCurrentPlayer() {
        return this.#currentPlayerColor;
    }

    toggleCurrentPlayer() {
        eventBus.dispatchEvent('chagePlayer');
        if (this.#currentPlayerColor === 'white') {
            this.#currentPlayerColor = 'black'
            return;
        }
        this.#currentPlayerColor = 'white';
    }

    private onChecked() {
        const currentKingCell = this.getCurrentKing().getCurrentCell();
        currentKingCell.changeColor(BOARD_CELL_COLOR.capture);

        setTimeout(() => {
            const currentKingCell = this.getCurrentKing().getCurrentCell()
            currentKingCell.setDefualtColor();
        }, 1000)
    }

    private onGameFinished() {
        const currentKingCell = this.getCurrentKing().getCurrentCell();
        currentKingCell.changeColor(BOARD_CELL_COLOR.capture);
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
        const figures = this.#currentPlayerColor === 'white' ?
            figureRepository.getFiguresByColor('white') : figureRepository.getFiguresByColor('black');
        const avalibleMoves = figures.flatMap(figure => {
            const movies = this.#figureMoveService.getAvalibleMoveCells(figure)
            return this.filterAvalibleCellsByKingCheck(movies, figure);
        });

        return avalibleMoves.length === 0;
    }

    filterAvalibleCellsByKingCheck(avalibleCells: BoardCell[], selectedFigure: Figure) {
        let isKingUnderCheck = this.isKingUnderCheck();
        if(!isKingUnderCheck) {
            return avalibleCells;
        }

        const selectedigureCell = selectedFigure.getCurrentCell();

        return avalibleCells.filter(cell => {
            selectedigureCell.setFigure(null);
            selectedFigure.setCurrentCell(cell);
            cell.setFigure(selectedFigure);
            const isKingUnderCheckAfterMove = this.isKingUnderCheck();
            selectedFigure.setCurrentCell(selectedigureCell);
            selectedigureCell.setFigure(selectedFigure);
            cell.setFigure(null);
           return !isKingUnderCheckAfterMove;
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