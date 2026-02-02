import { HTMLAdapter } from "../adapters/HTMLAdapter";
import type { UIAdater } from "../adapters/SceneAdapter";
import { BoardCell } from "../domain/BoardCell";
import { Figure } from "../domain/Figure";
import { eventBus, eventTypes } from "../../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { GameManager } from "./GameManager";
import { FigureMoveEvent, type FigureMoveEventDTO } from "@/infra/FigureMoveEvent";

export class Application {
    #UIAdater: UIAdater;
    // eslint-disable-next-line no-unused-private-class-members
    #htmlAdapter = new HTMLAdapter();

    #selectedFigure: Figure | null = null;
    #gameManager: GameManager;
	#figureMoveEvent: FigureMoveEvent | null = null;
	#moves:string[] = []

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;
        this.#gameManager = new GameManager();

        eventBus.subscribe(eventTypes.cellClick, this.onCellClick.bind(this));
        eventBus.subscribe(eventTypes.figureClick, this.onFigureClick.bind(this));
        eventBus.subscribe(eventTypes.outsideClick, this.onOutsideClick.bind(this));
		eventBus.subscribe(eventTypes.revertFigureMove, this.onRevertFigureMove.bind(this));
		eventBus.subscribe(eventTypes.nextStepResponse, this.onNextStepResponse.bind(this));
		eventBus.subscribe(eventTypes.figureMove, this.collectSteps.bind(this));
    }

    private onNextStepResponse(data: unknown) {
		const { detail } = data as {detail: {nextStep: string}}
        console.log('onNextStepResponse', detail.nextStep);
    }

	private collectSteps(data: unknown) {
		const { detail } = data as {detail : {value: { currentCell: string, destinationCell: string }}};
		this.#moves.push(`${detail.value.currentCell}${detail.value.destinationCell}`)
		eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' ')})
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

	private onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO};
		const destinationCell = cellRepository.getCell(detail.destinationCell);
		const destinationCellFigure = destinationCell.getFigure();
		const currentCell = cellRepository.getCell(detail.currentCell);
		const cupturedFigure = null;
		this.#gameManager.toggleCurrentPlayer();
		if(this.#selectedFigure) {
			this.#selectedFigure.unselect();
			this.#gameManager.unhighliteMoves(this.#selectedFigure);
		}
		this.#selectedFigure = destinationCellFigure;
		if(!this.#selectedFigure) {
			return;
		}

		this.#gameManager.unhighliteMoves(this.#selectedFigure);
        this.#selectedFigure.unselect();
        this.#selectedFigure.revert(currentCell);
        destinationCell.setFigure(cupturedFigure);
		currentCell.setFigure(this.#selectedFigure);
        this.#selectedFigure = null;
		if(detail.capture) {
			this.#UIAdater.initFigure(
				detail.enPassant ? detail.enPassant : detail.destinationCell,
				this.#gameManager.getSecondPlayerColor(),
				detail.capture
			);
		}
		if(detail.rouqe) {
			const rookDestinatioCell = cellRepository.getCell(detail.rouqe.rookDestinatioCell);
			const rookCell = cellRepository.getCell(detail.rouqe.rookCell);
			const rook = rookDestinatioCell.getFigure();
			if(!rook) {
				return;
			}
			rook.move(rookCell);
            rookDestinatioCell.setFigure(null);
            rookCell.setFigure(rook);
		}
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
				this.#figureMoveEvent = new FigureMoveEvent(
					this.#selectedFigure,
					currentCell.getCellName(),
					destinationCell.getCellName(),
					rightSiblingCell.getFigure()?.getType());
				this.#figureMoveEvent.isEnPassant(rightSiblingCellName);
				this.captureFigureEnPassant(currentCell, destinationCell, rightSiblingCell);
				
                return true;
        }
        
        const leftSiblingCellName = currentCell.getLeftSibling(this.#selectedFigure.getColor());
        const leftSiblingCell = cellRepository.getCell(leftSiblingCellName);
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure && currentCellFigure.getType() === 'Pawn'
            && leftSiblingCell && leftSiblingCell.canEnPassantCupture(this.#selectedFigure.getColor())
            && destinationCell.getCellRow() === leftSiblingCell.getCellRow()
            ) {
				this.#figureMoveEvent = new FigureMoveEvent(
					this.#selectedFigure,
					currentCell.getCellName(),
					destinationCell.getCellName(),
					leftSiblingCell.getFigure()?.getType());
				this.#figureMoveEvent.isEnPassant(leftSiblingCellName);
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
			this.#figureMoveEvent = new FigureMoveEvent(
				this.#selectedFigure,
				currentCell.getCellName(),
				destinationCell.getCellName(),
				destinationCell.getFigure()?.getType())
            this.captureFigureRegular(currentCell, destinationCell)
			return true;
        }
        return false;
    }

    private tryMoveFigure(destinationCell: BoardCell, currentCell: BoardCell){
        if(destinationCell.getCanMove() && this.#selectedFigure) {
			this.#figureMoveEvent = new FigureMoveEvent(
				this.#selectedFigure,
				currentCell.getCellName(),
				destinationCell.getCellName())
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
				this.#figureMoveEvent?.isRouqe({
					rookDestinatioCell: roque.rookDestinationCellName,
					rookCell: roque.rookDefualtCellName,
				});
            }
        }
        
        this.#gameManager.toggleCurrentPlayer();
		if(!this.#figureMoveEvent) {
			throw new Error('no figure move event');
		}
        if(this.#gameManager.isKingUnderCheck()) {
			this.#figureMoveEvent.isCheck(true);
        }
        if(this.#gameManager.isGameFinished()) {
			this.#figureMoveEvent.isGameEnd(true);
        };
		eventBus.dispatchEvent('figureMove', { value: this.#figureMoveEvent.toJson()});
		this.#figureMoveEvent = null;
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
		this.#UIAdater.remove(capturedFigure.getFigure());
        figureRepository.deleteFigure(capturedFigure);
        this.moveFigure(currentCell, destinationCell);
	}
}