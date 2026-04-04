import type { Figure, FigureColor, FigureType } from "@/chess/domain/Figure";

export type FigureMoveEventDTO = {
	figureType: FigureType;
	figureColor: FigureColor;
	currentCell: string;
	destinationCell: string;
	capture: FigureType | undefined;
	rouqe: RoqueData | null;
	check: boolean;
	gameend: boolean;
	enPassant: string | null;
	transform: TransformType;
};

type RoqueData = {
	rookDestinatioCell: string,
	rookCell: string,
}

// for pawn transform q - queen, r - rook, b - bishop, n - knight
export type TransformType = FigureType | undefined;

export class FigureMoveEvent {
	#figureType: FigureType;
	#figureColor: FigureColor
	#currentCell: string;
	#destinationCell: string;
	#capture: FigureType | undefined = undefined;
	#rouqe: RoqueData| null = null;
	#check = false;
	#gameend = false;
	#enPassant: string | null = null;
	#transform: TransformType = undefined;

	constructor(figure: Figure, currentCell: string, destinationCell: string) {
		this.#figureType = figure.getType();
		this.#figureColor = figure.getColor();
		this.#currentCell = currentCell;
		this.#destinationCell = destinationCell;
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
			enPassant: this.#enPassant,
			transform: this.#transform
		}
	}

	initStep(figureType: FigureType, currentCell: string, destinationCell: string) {
		this.#figureType = figureType;
		this.#currentCell = currentCell;
		this.#destinationCell = destinationCell;
	}

	isRouqe(isRouqe: RoqueData) {
		this.#rouqe = isRouqe;
	}

	isCheck(isCheck: boolean) {
		this.#check = isCheck;
	}
	
	isGameEnd(isGameEnd: boolean) {
		this.#gameend = isGameEnd;
	}

	isEnPassant(isEnPassant: string | null) {
		this.#enPassant = isEnPassant;
	}

	setIsCapture(captured?: FigureType) {
		this.#capture = captured;
	}

	setTransform(transform: TransformType) {
		this.#transform = transform;
	}
}
