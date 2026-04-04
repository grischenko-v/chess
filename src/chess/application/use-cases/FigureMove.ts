import type { BoardCell } from "@/chess/domain/BoardCell";
import type { GameManager } from "../GameManager";
import { FigureMoveEvent } from "@/infra/FigureMoveEvent";
import type { Figure } from "@/chess/domain/Figure";
import type { PawnTrasformationController } from "../PawnTransformationController";
import { cellRepository } from "@/chess/repository/CellRepository";
import { figureRepository } from "@/chess/repository/FiguresRepository";
import type { UIAdater } from "@/chess/adapters/SceneAdapter";

export class FigureMove {
	private gameManager: GameManager;
	private figureMoveEvent!: FigureMoveEvent | undefined;
	private pawnTrasformationController: PawnTrasformationController;
	private UIAdater: UIAdater;

	constructor(gameManager: GameManager, UIAdater: UIAdater, pawnTrasformationController: PawnTrasformationController) {
		this.gameManager = gameManager;
		this.UIAdater = UIAdater;
		this.pawnTrasformationController = pawnTrasformationController;
	}

	async execute(data: {from: string, to: string}) {
		const currentCell = cellRepository.getCell(data.from);
		const currentFigure = currentCell.getFigure();
		const destinationCell = cellRepository.getCell(data.to);
		this.onFigureClick({
			detail: {
				clickedFigure: currentFigure
			}
		})
		await this.onCellClick( {detail: {
			clickedCell: destinationCell
		}});	


		return this.figureMoveEvent;
	}


	async onFigureClick(data: unknown) {
		const { detail } = data as { detail: { clickedFigure: Figure }};
		const { clickedFigure } = detail;
		const selectedFigure = this.gameManager.getSelectedFigure();
	
		if(selectedFigure && clickedFigure.getCurrentCell().getCanMove()) {
			this.figureMoveEvent = await this.onCellClick({ detail: { clickedCell: clickedFigure.getCurrentCell() } })
			return this.figureMoveEvent;
		}
	
		if(this.gameManager.modeisMulti() && clickedFigure.getColor() !== this.gameManager.getCurrentPlayer()) {
			return;
		}
	
		if(selectedFigure && selectedFigure.getName() !== clickedFigure.getName() ) {
			this.gameManager.unhighliteMoves();
			this.gameManager.unselectFigure();
			this.gameManager.setSelectedFigure(clickedFigure);
			this.gameManager.highliteMoves();
			return;
		}
	
		if(selectedFigure) {
			this.gameManager.unhighliteMoves();
			return;
		}
	
		this.gameManager.setSelectedFigure(clickedFigure);
		this.gameManager.highliteMoves();
	}

	async onCellClick(data: unknown) {
		const { detail } = data as { detail: { clickedCell: BoardCell }};
		const { clickedCell: destinationCell } = detail;
		const selectedFigure = this.gameManager.getSelectedFigure();
		
		if(!selectedFigure) {
			return;
		}
		const currentCell = selectedFigure.getCurrentCell();
		
		this.figureMoveEvent = new FigureMoveEvent(
			selectedFigure,
			currentCell.getCellName(),
			destinationCell.getCellName());
		
		await this.pawnTrasformationController.pawnTransformation(destinationCell, selectedFigure);
		if(this.tryEnPassantCapture(destinationCell, currentCell)) {
			return this.figureMoveEvent;
		}
		
		if(this.tryRegularCapture(destinationCell, currentCell)) {
			return this.figureMoveEvent;
		}
		
		if(this.tryMoveFigure(destinationCell, currentCell)) {
			return this.figureMoveEvent;
		}
		
		this.unselectFigure();
		return this.figureMoveEvent;
	}

	private tryEnPassantCapture(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.gameManager.getSelectedFigure();
	
		if(!selectedFigure) {
			return false;
		}
		const rightSiblingCellName = currentCell.getRightSibling(selectedFigure.getColor());
		const rightSiblingCell = cellRepository.getCell(rightSiblingCellName);
		const currentCellFigure = currentCell.getFigure();
		if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure &&  currentCellFigure.getType() === 'Pawn'
			&& rightSiblingCell && rightSiblingCell.canEnPassantCupture(selectedFigure.getColor())
			&& destinationCell.getCellRow() === rightSiblingCell.getCellRow() && this.figureMoveEvent
			) {  
				this.figureMoveEvent.setIsCapture(rightSiblingCell.getFigure()?.getType());
				this.figureMoveEvent.isEnPassant(rightSiblingCellName);
				this.captureFigureEnPassant(currentCell, destinationCell, rightSiblingCell);	
				return true;
		}
			
		const leftSiblingCellName = currentCell.getLeftSibling(selectedFigure.getColor());
		const leftSiblingCell = cellRepository.getCell(leftSiblingCellName);
		if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure && currentCellFigure.getType() === 'Pawn'
			&& leftSiblingCell && leftSiblingCell.canEnPassantCupture(selectedFigure.getColor())
			&& destinationCell.getCellRow() === leftSiblingCell.getCellRow() && this.figureMoveEvent
			) {
				this.figureMoveEvent.setIsCapture(leftSiblingCell.getFigure()?.getType())
				this.figureMoveEvent.isEnPassant(leftSiblingCellName);
				this.captureFigureEnPassant(currentCell, destinationCell, leftSiblingCell);
				return true;
		}
	
		return false;
	}

	private tryRegularCapture(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.gameManager.getSelectedFigure();
		if(!selectedFigure) {	
			return false;
		}

		if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== selectedFigure.getColor() && this.figureMoveEvent) {
			this.figureMoveEvent.setIsCapture(destinationCell.getFigure()?.getType());
			this.captureFigureRegular(currentCell, destinationCell)
			return true;
		}
		return false;
	}

	private tryMoveFigure(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.gameManager.getSelectedFigure();
		if(destinationCell.getCanMove() && selectedFigure) {
			this.moveFigure(currentCell, destinationCell);
			return true;
		}
		return false;
	}

	private unselectFigure() {
		const selectedFigure = this.gameManager.getSelectedFigure();
		if(!selectedFigure) {
			return;
		}
		this.gameManager.unhighliteMoves();
		this.unSelectCurrentFigure();
	}

	private unSelectCurrentFigure() {
		const selectedFigure = this.gameManager.getSelectedFigure();
		if(!selectedFigure) {
			return;
		}
		this.gameManager.unselectFigure();
	}

	private moveFigure(currentCell: BoardCell, destinationCell: BoardCell) {
		const selectedFigure = this.gameManager.getSelectedFigure();
		if(!selectedFigure) {
			return;
		}
					
		const selectedFigureType = selectedFigure.getType();
		this.gameManager.unhighliteMoves();
		selectedFigure.move(destinationCell);
		currentCell.setFigure(null);

		destinationCell.setFigure(selectedFigure);
	
		const roque = this.gameManager.isRoqueAvailable(destinationCell);
		if(selectedFigureType === 'King' && roque) {
			const rookCell = cellRepository.getCell(roque.rookDefualtCellName);
			const rookDestinatioCell = cellRepository.getCell(roque.rookDestinationCellName);
			const rook = rookCell.getFigure();
			if(rook) {
				rook.move(rookDestinatioCell);
				rookDestinatioCell.setFigure(rook);
				rookCell.setFigure(null);
				this.figureMoveEvent?.isRouqe({
					rookDestinatioCell: roque.rookDestinationCellName,
					rookCell: roque.rookDefualtCellName,
				});
			}
		}
	}

 	private captureFigureRegular(currentCell: BoardCell, destinationCell: BoardCell) {
		const capturedFigure = destinationCell.getFigure();
		if(!capturedFigure) {
			return;
		}
	   this.captureFigure(capturedFigure, currentCell, destinationCell);
	}

	private captureFigureEnPassant(currentCell: BoardCell, destinationCell: BoardCell, cupturedCell: BoardCell) {
		const capturedFigure = cupturedCell.getFigure();
		if(!capturedFigure) {
			return;
		}
		this.captureFigure(capturedFigure, currentCell, destinationCell);
	}

	private captureFigure(capturedFigure: Figure, currentCell: BoardCell, destinationCell: BoardCell) {
		this.UIAdater.remove(capturedFigure.getFigure());
		figureRepository.deleteFigure(capturedFigure);
		this.moveFigure(currentCell, destinationCell);
	}	

}