import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import type { GameManager } from "../GameManager";
import { cellRepository } from "@/chess/repository/CellRepository";
import type { UIAdater } from "@/chess/adapters/SceneAdapter";
import type { PawnTrasformationController } from "../PawnTransformationController";

export class RevertFigureMove {
	private gameManager: GameManager;
	private UIAdater: UIAdater;
	private pawnTrasformationController: PawnTrasformationController

	constructor(gameManager: GameManager, UIAdater: UIAdater, pawnTrasformationController: PawnTrasformationController) {
		this.gameManager = gameManager;
		this.UIAdater = UIAdater;
		this.pawnTrasformationController = pawnTrasformationController;
	}

	execute(data: FigureMoveEventDTO) {
		const destinationCell = cellRepository.getCell(data.destinationCell);
		const destinationCellFigure = destinationCell.getFigure();
		const currentCell = cellRepository.getCell(data.currentCell);
		const cupturedFigure = null;
				
		this.gameManager.toggleCurrentPlayer();
		
		if(destinationCellFigure) {
			this.gameManager.setSelectedFigure(destinationCellFigure);
		}
		
		const selectedFigure = this.gameManager.getSelectedFigure();
		
		if(selectedFigure) {
			this.gameManager.unhighliteMoves();
		}
		
		this.gameManager.unhighliteMoves();
		this.gameManager.revertFigureMove(currentCell);
		
		destinationCell.setFigure(cupturedFigure);
		currentCell.setFigure(selectedFigure);
		this.gameManager.unselectFigure();
		
		if(data.capture) {
			this.UIAdater.initFigure(
				data.enPassant ? data.enPassant : data.destinationCell,
				this.gameManager.getSecondPlayerColor(),
				data.capture
			);
		}
		if(data.rouqe) {
			const rookDestinatioCell = cellRepository.getCell(data.rouqe.rookDestinatioCell);
			const rookCell = cellRepository.getCell(data.rouqe.rookCell);
			const rook = rookDestinatioCell.getFigure();
			if(!rook) {
				return;
			}
			rook.revert(rookCell);
			rookDestinatioCell.setFigure(null);
			rookCell.setFigure(rook);
		}
		if(data.transform) {
			this.pawnTrasformationController.animateRevert(currentCell);
		}

	}
}