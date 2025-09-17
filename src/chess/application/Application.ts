import { HTMLAdapter } from "../adapters/HTMLAdapter";
import type { UIAdater } from "../adapters/SceneAdapter";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { eventBus, eventTypes } from "../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { GameManager } from "./GameManager";

export class Application {
    #UIAdater: UIAdater;
    #htmlAdapter = new HTMLAdapter();

    #selectedFigure: Figure | null = null;
    #gameManager: GameManager;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;
        this.#gameManager = new GameManager();

        eventBus.subscribe(eventTypes.cellClick, this.onCellClick.bind(this));
        eventBus.subscribe(eventTypes.figureClick, this.onFigureClick.bind(this));
        eventBus.subscribe(eventTypes.outsideClick, this.onOutsideClick.bind(this));
    }

    private onFigureClick(data: unknown) {
        const { detail } = data as { detail: { clickedFigure: Figure }};
        const { clickedFigure } = detail;

        if(this.#selectedFigure && clickedFigure.getCurrentCell().getCanMove()) {
			this.onCellClick({ detail: { clickedCell: clickedFigure.getCurrentCell() } })
            return;
        }

        if(clickedFigure.getColor() !== this.#gameManager.getCurrentPlayer()) {
            return;
        }

        if(this.#selectedFigure && this.#selectedFigure.getName() !== clickedFigure.getName() ) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            this.#selectedFigure = clickedFigure;
            this.#selectedFigure.select();
            this.#gameManager.highliteMoves(this.#selectedFigure);
            return;
        }

        if(this.#selectedFigure) {
            this.#gameManager.unhighliteMoves(this.#selectedFigure);
            this.#selectedFigure.unselect();
            return;
        }

        this.#selectedFigure = clickedFigure;
        this.#selectedFigure.select();
        this.#gameManager.highliteMoves(this.#selectedFigure);
    }

    private onCellClick(data: unknown) {
        const { detail } = data as { detail: { clickedCell: BoardCell }};
        const { clickedCell: destinationCell } = detail;
        if(!this.#selectedFigure) {
            return;
        }
        const currentCell = this.#selectedFigure.getCurrentCell();

        if(this.tryEnPassantCapture(destinationCell, currentCell)) {
            return;
        }

        if(this.tryRegularCapture(destinationCell, currentCell)) {
            return
        }

        if(this.tryMoveFigure(destinationCell, currentCell)) {
            return;
        }

        this.unselectFigure();
    }

    private tryEnPassantCapture(destinationCell: BoardCell, currentCell: BoardCell) {
        if(!this.#selectedFigure) {
            return false;
        }
        const rightSiblingCellName = currentCell.getRightSibling(this.#selectedFigure.getColor());
        const rightSiblingCell = cellRepository.getCell(rightSiblingCellName);
        const currentCellFigure = currentCell.getFigure();
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure &&  currentCellFigure.getType() === 'Pawn'
            && rightSiblingCell && rightSiblingCell.canEnPassantCupture(this.#selectedFigure.getColor())
            && destinationCell.getCellRow() === rightSiblingCell.getCellRow()
            ) {  
				eventBus.dispatchEvent('figureMove', {
					currentCell: currentCell.getCellName(),
					destinationCell: destinationCell.getCellName(),
					figureType: this.#selectedFigure.getType(),
					player: this.#gameManager.getCurrentPlayer(),
					moveType: 'capture',
				});
				this.captureFigureEnPassant(currentCell, destinationCell, rightSiblingCell);
                return true;
        }
        
        const leftSiblingCellName = currentCell.getLeftSibling(this.#selectedFigure.getColor());
        const leftSiblingCell = cellRepository.getCell(leftSiblingCellName);
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure && currentCellFigure.getType() === 'Pawn'
            && leftSiblingCell && leftSiblingCell.canEnPassantCupture(this.#selectedFigure.getColor())
            && destinationCell.getCellRow() === leftSiblingCell.getCellRow()
            ) {
                this.captureFigureEnPassant(currentCell, destinationCell, leftSiblingCell);
                return true;
        }

        return false;
    }

    private tryRegularCapture(destinationCell: BoardCell, currentCell: BoardCell) {
        if(!this.#selectedFigure) {	
            return false;
        }

        if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== this.#selectedFigure.getColor()) {
			eventBus.dispatchEvent('figureMove', {
				currentCell: currentCell.getCellName(),
				destinationCell: destinationCell.getCellName(),
				figureType: this.#selectedFigure.getType(),
				player: this.#gameManager.getCurrentPlayer(),
				moveType: 'capture',
			});
            this.captureFigure(currentCell, destinationCell)
			return true;
        }
        return false;
    }

    private tryMoveFigure(destinationCell: BoardCell, currentCell: BoardCell){
        if(destinationCell.getCanMove()) {
			eventBus.dispatchEvent('figureMove', {
				currentCell: currentCell.getCellName(),
				destinationCell: destinationCell.getCellName(),
				figureType: this.#selectedFigure?.getType(),
				player: this.#gameManager.getCurrentPlayer(),
				moveType: 'move',
			});
            this.moveFigure(currentCell, destinationCell);
            return true;
        }
        return false;
    }

    private unselectFigure() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.unSelectCurrentFigure();
    }

    private onOutsideClick() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.unSelectCurrentFigure();
    }

    private unSelectCurrentFigure() {
        if(!this.#selectedFigure) {
            return;
        }
        this.#selectedFigure.unselect();
        this.#selectedFigure = null;
    }

    private moveFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        if(!this.#selectedFigure) {
            return;
        }

        const selectedFigureType = this.#selectedFigure.getType();
        this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.move(destinationCell);
        currentCell.setFigure(null);

		destinationCell.setFigure(this.#selectedFigure);

        this.#selectedFigure = null;
	
        const roque = this.#gameManager.isRoqueAvailable(destinationCell);
        if(selectedFigureType === 'King' && roque) {
            const rookCell = cellRepository.getCell(roque.rookDefualtCellName);
            const rookDestinatioCell = cellRepository.getCell(roque.rookDestinationCellName);
            const rook = rookCell.getFigure();
            if(rook) {
                rook.move(rookDestinatioCell);
                rookDestinatioCell.setFigure(rook);
                rookCell.setFigure(null);
            }
        }
        
        this.#gameManager.toggleCurrentPlayer();
        if(this.#gameManager.isKingUnderCheck()) {
            eventBus.dispatchEvent('checked');
        }
        if(this.#gameManager.isGameFinished()) {
            eventBus.dispatchEvent('gameFinished');
        };
    }

    private captureFigure(currentCell: BoardCell, destinationCell: BoardCell) {
        const capturedFigure = destinationCell.getFigure();
        if(!capturedFigure) {
            return;
        }
        this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);
        eventBus.dispatchEvent('figureCaptured', { capturedFigure });
        this.moveFigure(currentCell, destinationCell);
    }

    private captureFigureEnPassant(currentCell: BoardCell, destinationCell: BoardCell, cupturedCell: BoardCell) {
        const capturedFigure = cupturedCell.getFigure();
        if(!capturedFigure) {
            return;
        }
        this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);
        eventBus.dispatchEvent('figureCaptured', { capturedFigure });
        this.moveFigure(currentCell, destinationCell);
    }
}