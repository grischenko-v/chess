import type { FigureType } from "@/chess/domain/Figure";

export type FigureMoveEventDTO = {
	figureType: FigureType;
	currentCell: string;
	destinationCell: string;
	capture: boolean;
	rouqe: boolean;
	check: boolean;
	gameend: boolean;
};

export class FigureMoveEvent {
	#figureType: FigureType;
	#currentCell: string;
	#destinationCell: string;
	#capture = false;
	#rouqe = false;
	#check = false;
	#gameend = false;

	constructor(figureType: FigureType, currentCell: string, destinationCell: string, isCapture: boolean) {
		this.#figureType = figureType;
		this.#currentCell = currentCell;
		this.#destinationCell = destinationCell;
		this.#capture = isCapture;
	}

	static fromJson(obj: FigureMoveEventDTO) {

	}

	toJson(): FigureMoveEventDTO {
		return {
			figureType: this.#figureType,
			currentCell: this.#currentCell,
			destinationCell: this.#destinationCell,
			capture: this.#capture,
			rouqe: this.#rouqe,
			check: this.#check,
			gameend: this.#gameend,
		}
	}

	initStep(figureType: FigureType, currentCell: string, destinationCell: string, isCapture: boolean) {
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
