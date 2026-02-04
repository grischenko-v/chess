import { eventBus, eventTypes } from "@/infra/EventBus";
import type { BoardCell } from "../domain/BoardCell";
import type { Figure } from "../domain/Figure";

export class PawnTrasformationController {
	#transformation = false;

	async pawnTransformation(destinationCell: BoardCell, selectedFigure: Figure) {
		if(this.checkTransformationPosibility(destinationCell, selectedFigure)) {
			eventBus.dispatchEvent(eventTypes.pawnTransformRequest,{
				currentColor: selectedFigure.getColor(),
				figureName: selectedFigure.getName(),
			});
			this.#transformation = true;
		}
		await this.isTransforamtionCompilte();
	}

	transformationComplite() {
		this.#transformation = false;
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
			destinationCell.getCellRow() === 'f';
		if(transformWhite || transformBlack) {
			return true;
		}
		return false;
	}

	private async isTransforamtionCompilte () {
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