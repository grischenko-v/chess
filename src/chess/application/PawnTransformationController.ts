import { eventBus, eventTypes } from "@/infra/EventBus";
import type { BoardCell } from "../domain/BoardCell";
import type { Figure } from "../domain/Figure";
import type { UIAdater } from "../adapters/SceneAdapter";
import type { TransformType } from "@/infra/FigureMoveEvent";

export class PawnTrasformationController {
	#transformation = false;
	#UIAdater: UIAdater;

	constructor( UIAdater: UIAdater) {
		this.#UIAdater = UIAdater;
	}

	private dispatchTransformResponseonInit(selectedFigure: Figure, transform: TransformType) {
		setTimeout(() => eventBus.dispatchEvent(eventTypes.pawnTransformResponse, {
			figureType: transform,
			figureName: selectedFigure.getName()
		}), 0);
	}

	private dispatchTransformRequest(selectedFigure: Figure) {
		eventBus.dispatchEvent(eventTypes.pawnTransformRequest,{
			currentColor: selectedFigure.getColor(),
			figureName: selectedFigure.getName(),
		});
	}

	private dispatchPawnTransformationEvent(selectedFigure: Figure, transform?: TransformType) {
		if(transform) {
			this.dispatchTransformResponseonInit(selectedFigure, transform)
			return;
		} 
		this.dispatchTransformRequest(selectedFigure);	
	}

	async pawnTransformation(destinationCell: BoardCell, selectedFigure: Figure, transform?: TransformType) {
		if(this.checkTransformationPosibility(destinationCell, selectedFigure)) {
			this.dispatchPawnTransformationEvent(selectedFigure, transform);
			this.#transformation = true;
		}
		await this.isTransforamtionCompilte();
	}

	transformationComplite() {
		this.#transformation = false;
	}

	animate(transformType: TransformType, selectedFigure: Figure) {
		if(!selectedFigure) {
			return;
		}

		const figure = selectedFigure.getFigure();
		setTimeout(() =>{
			if(transformType) {
				this.#UIAdater.initFigure(
					selectedFigure.getCurrentCell().getCellName(),
					selectedFigure.getColor(),
					transformType
				);
				this.#UIAdater.remove(figure);
			}
		}, 1000);
	}

	animateRevert(currentCell: BoardCell) {
		const figure = currentCell.getFigure();
		if(!figure) {
			return;
		}
		setTimeout(() => {
			this.#UIAdater.remove(figure.getFigure());
			this.#UIAdater.initFigure(
				currentCell.getCellName(),
				figure.getColor(),
				'Pawn'
			);
		}, 1000);
	}

	private checkTransformationPosibility(destinationCell: BoardCell, selectedFigure: Figure) {
		const destinationCellFigure = selectedFigure;
		if(!destinationCellFigure) {
			return false;
		}

		const transformWhite = destinationCellFigure.getType() === 'Pawn' && 
			destinationCellFigure.getColor() === 'white' && 
			destinationCell.getCellColumn() === '8';
		const transformBlack = destinationCellFigure.getType() === 'Pawn' && 
			destinationCellFigure.getColor() === 'black' && 
			destinationCell.getCellRow() === '1';
		if(transformWhite || transformBlack) {
			return true;
		}
		return false;
	}

	async isTransforamtionCompilte () {
		return new Promise<void>((resolve) => {
			const checkIsTransformationComplite = () => {
				if(!this.#transformation) {
					resolve();
				} else {
					setTimeout(checkIsTransformationComplite, 100);
				}
			}
			checkIsTransformationComplite();
		});
	}
}