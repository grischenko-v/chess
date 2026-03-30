import { BOARD_CELL_COLOR, ROQUE_STEP_MAP, type ROQUE_STEP_MAP_KEYS } from "../constants";
import { BoardCell } from "../domain/BoardCell";
import { Figure, type FigureColor } from "../domain/Figure";
import { eventBus, eventTypes } from "../../infra/EventBus";
import { figureRepository } from "../repository/FiguresRepository";
import { CellStatusManager } from "./CellStatusManager";
import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";

export type gameMode = 'single' | 'multi';
export class GameManager {
	#currentPlayerColor: Omit<FigureColor, 'selected'> = 'white';
	#cellStatusManager: CellStatusManager;
	#selectedFigure: Figure | null = null;
	#moves: string[] = [];
	#mode: gameMode = 'multi';

	constructor() {
		this.#cellStatusManager = new CellStatusManager();
		eventBus.subscribe(eventTypes.figureMove, this.onFigureMove.bind(this));
	}

	setMode(mode: gameMode) {
		this.#mode = mode;
	}

	modeisMulti() {
		return this.#mode === 'multi';
	}

	modeIsSingle() {
		return this.#mode === 'single';
	}

	setSelectedFigure(figure: Figure | null) {
		this.#selectedFigure = figure;
		this.#selectedFigure?.select();
	}

	getSelectedFigure() {
		return this.#selectedFigure;
	}

	revertFigureMove(cell: BoardCell) {
		this.#selectedFigure?.revert(cell);
	}

	unselectFigure() {
		this.#selectedFigure?.unselect();
		this.#selectedFigure = null;
	}

	getCurrentPlayer() {
		return this.#currentPlayerColor;
	}

	getSecondPlayerColor() {
		return this.#currentPlayerColor === 'black' ? 'white' : 'black';
	}

	toggleCurrentPlayer() {
		if (this.#currentPlayerColor === 'white') {
			this.#currentPlayerColor = 'black'
			return;
		}
		this.#currentPlayerColor = 'white';
	}

	addMove(move: string) {
		this.#moves.push(move);
	}

	removeMove() {
		this.#moves.pop();
	}

	getMovesCount() {
		return this.#moves.length;
	}

	getMoveinUCI() {
		return this.#moves.join(' ');
	}

	private onFigureMove(data: unknown) {
		const { detail } = data as { detail: { value: FigureMoveEventDTO }};		
		if(detail.value.check) {
			this.onChecked();
		}
		if(detail.value.gameend) {
			this.onGameFinished();
		}
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
		if(!currentKing) {
			throw new Error('There must be the king');
		}
		return currentKing;
	}

	private getfiguresWithAttackedCells() {
		const figures = figureRepository.getFiguresByColor(this.getSecondPlayerColor());

		const figuresWithAttackedCells = figures.flatMap(figure => {
			return {
				figure: figure,
				cells: this.#cellStatusManager.getCaptureCells(figure)
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
		const figures = figureRepository.getFiguresByColor(this.#currentPlayerColor);
		const avalibleMoves = figures.flatMap(figure => {
			const movies = this.#cellStatusManager.getAvalibleMoveCells(figure)
			return this.filterAvalibleCellsByKingCheck(movies, figure);
		});

		return avalibleMoves.length === 0;
	}

	isRoqueAvailable(cell: BoardCell) {
		return  ROQUE_STEP_MAP[cell.getCellName() as ROQUE_STEP_MAP_KEYS]
	}

	filterAvalibleCellsByKingCheck(avalibleCells: BoardCell[], selectedFigure: Figure) {
		const selectedigureCell = selectedFigure.getCurrentCell();
		const isKingUnderCheck = this.isKingUnderCheck();
		const isKingSelected = selectedFigure.getType() === 'King';

		return avalibleCells.filter(cell => {
			const roque = this.isRoqueAvailable(cell);

			if(isKingSelected && isKingUnderCheck && roque) {
				return false;
			}

			const cellFigure = cell.getFigure();
			this.simulateMove(cell, selectedFigure, selectedigureCell, cellFigure);
			const isKingUnderCheckAfterMove = this.isKingUnderCheck();
			this.revertSimulateMove(cell, selectedFigure, selectedigureCell, cellFigure);
		  
			return !isKingUnderCheckAfterMove;
		})
	}

	private simulateMove(cell: BoardCell, selectedFigure: Figure, selectedigureCell: BoardCell, cellFigure: Figure | null) {
		if(cellFigure && cellFigure.getColor() !== this.#currentPlayerColor || !cellFigure) {
			selectedigureCell.setFigure(null);
			selectedFigure.setCurrentCell(cell);
			cell.setFigure(selectedFigure);
			if(cellFigure) {
				figureRepository.deleteFigure(cellFigure);
			}
		}
	}

	private revertSimulateMove(cell: BoardCell, selectedFigure: Figure, selectedigureCell: BoardCell, cellFigure: Figure | null) {
		if(cellFigure && cellFigure.getColor() !== this.#currentPlayerColor || !cellFigure) {
			selectedigureCell.setFigure(selectedFigure);
			selectedFigure.setCurrentCell(selectedigureCell);
			cell.setFigure(cellFigure);
			if(cellFigure) {
				cellFigure.setCurrentCell(cell);
				figureRepository.addFigure(cellFigure);
			}
		}
	}

	highliteMoves() {
		if(!this.#selectedFigure) {
			return;
		}
		const avalibleCells = this.#cellStatusManager.getAvalibleMoveCells(this.#selectedFigure);
		this.filterAvalibleCellsByKingCheck(avalibleCells, this.#selectedFigure).forEach((cell: BoardCell) => cell.setCanMove(true));
	}

	unhighliteMoves() {
		if(!this.#selectedFigure) {
			return;
		}
		this.#selectedFigure.unselect();
		const avalibleCells = this.#cellStatusManager.getAvalibleMoveCells(this.#selectedFigure);
		avalibleCells.forEach((cell: BoardCell) => cell.setCanMove(false));
	}
}