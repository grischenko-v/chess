import type { Figure, FigureColor, FigureType } from "@/chess/domain/Figure";

export type FigureMoveEventDTO = {
	figureType: FigureType;
	figureColor: FigureColor;
	currentCell: string;
	destinationCell: string;
	capture: FigureType | undefined;
	rouqe: boolean;
	check: boolean;
	gameend: boolean;
};

export class FigureMoveEvent {
	#figureType: FigureType;
	#figureColor: FigureColor
	#currentCell: string;
	#destinationCell: string;
	#capture: FigureType | undefined = undefined;
	#rouqe = false;
	#check = false;
	#gameend = false;

	constructor(figure: Figure, currentCell: string, destinationCell: string, isCapture?: FigureType) {
		this.#figureType = figure.getType();
		this.#figureColor = figure.getColor();
		this.#currentCell = currentCell;
		this.#destinationCell = destinationCell;
		this.#capture = isCapture;
	}

	toJson(): FigureMoveEventDTO {
		return {
			figureType: this.#figureType,
			figureColor: this.#figureColor,
			currentCell: this.#currentCell,
			destinationCell: this.#destinationCell,
			capture: this.#capture,
			rouqe: this.#rouqe,
			check: this.#check,
			gameend: this.#gameend,
		}
	}

	initStep(figureType: FigureType, currentCell: string, destinationCell: string, isCapture: FigureType) {
		this.#figureType = figureType;
		this.#currentCell = currentCell;
		this.#destinationCell = destinationCell;
		this.#capture = isCapture;
	}

	isRouqe(isRouqe: boolean) {
		this.#rouqe = isRouqe;
	}

	isCheck(isCheck: boolean) {
		this.#check = isCheck;
	}
	
	isGameEnd(isGameEnd: boolean) {
		this.#gameend = isGameEnd;
	}
}
