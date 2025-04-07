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

    filterAvalibleCellsByKingCheck(avalibleCells: BoardCell[], figure: Figure) {
        let isKingUnderCheck = this.isKingUnderCheck();
        const currentFigureCell = figure.getCurrentCell();
        const kingCell = this.getCurrentKing().getCurrentCell();
        const attacedFigures = this.getfiguresWithAttackedCells()
            .filter(item => item.cells.includes(kingCell))
            .map(item => item.figure);
        console.log(avalibleCells);
        return avalibleCells.filter(cell => {
            if (cell.hasFigure() && cell.getFigure().getType() !== 'King' && figure.getType() !== 'King') {
                return !isKingUnderCheck || attacedFigures.includes(cell.getFigure());
            }

            currentFigureCell.setFigure(null);
            let oldFigure = null;
            if(cell.hasFigure()) {
                oldFigure = cell.getFigure();
                oldFigure.setCurrentCell(null);
                cell.setFigure(null);
            }
            cell.setFigure(figure);
            figure.setCurrentCell(cell);

            
            const test = this.getfiguresWithAttackedCells()
                .filter(item => item.cells.includes(cell))
            const isChecked = this.isKingUnderCheck();
            console.log(isChecked);
            currentFigureCell.setFigure(figure);
            figure.setCurrentCell(currentFigureCell);
            cell.setFigure(oldFigure);
            oldFigure && oldFigure.setCurrentCell(cell);
            if(figure.getType() === 'King') {

                console.log(test);
                return test.length === 0 && !isChecked;
            }
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