import { HTMLAdapter } from "../adapters/HTMLAdapter";
import type { UIAdater } from "../adapters/SceneAdapter";
import { BoardCell } from "../domain/BoardCell";
import { Figure, type FigureColor, type FigureType } from "../domain/Figure";
import { eventBus, eventTypes } from "../../infra/EventBus";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { GameManager } from "./GameManager";
import { FigureMoveEvent, type FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import { PawnTrasformationController } from "./PawnTransformationController";
import indexedDbWrapper from "@/infra/IndexedDb";
import { RevertFigureMove } from "./use-cases/RevertFigureMove";


type gameMode = 'single' | 'multi';
export class Application {
    #UIAdater: UIAdater;
    #gameManager: GameManager;
	#figureMoveEvent: FigureMoveEvent | null = null;
	#moves:string[] = []
	#pawnTrasformationController: PawnTrasformationController;
	#mode: gameMode = 'multi';
	#AIBotPlayerColor: Omit<FigureColor, 'selected'> = 'black';
	#htmlAdapter: HTMLAdapter;
	#isHistoryLoaded = false;
	#revertFigureMove: RevertFigureMove;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;
        this.#gameManager = new GameManager();
		this.#pawnTrasformationController = new PawnTrasformationController(UIAdater);
		this.#htmlAdapter = new HTMLAdapter();
		this.#revertFigureMove = new RevertFigureMove(this.#gameManager, this.#UIAdater, this.#pawnTrasformationController);

        eventBus.subscribe(eventTypes.cellClick, this.onUserCellClick.bind(this));
        eventBus.subscribe(eventTypes.figureClick, this.onUserFigureClick.bind(this));
        eventBus.subscribe(eventTypes.outsideClick, this.onOutsideClick.bind(this));
		eventBus.subscribe(eventTypes.revertFigureMove, this.onRevertFigureMove.bind(this));
		eventBus.subscribe(eventTypes.nextStepResponse, this.onNextStepResponse.bind(this));
		eventBus.subscribe(eventTypes.figureMove, this.collectMoves.bind(this));
		eventBus.subscribe(eventTypes.helpRequest, this.onHelpReuest.bind(this));
		eventBus.subscribe(eventTypes.pawnTransformResponse, this.onPawnTransformResponse.bind(this));
		eventBus.subscribe(eventTypes.gameModeSelect, this.onGameModeSelect.bind(this));
    }

	async initStateFromIndexedDb () {
		const events = await indexedDbWrapper.getEvents();
		if(!events || events.length == 0) {
			this.#isHistoryLoaded = true;
			return;
		}
		for(const event of events) {
			await this.makeMove({from: event.currentCell, to: event.destinationCell});
			this.#moves.push((`${event.currentCell}${event.destinationCell}`))
		}
		const gamedata = await indexedDbWrapper.getGame();
		this.onGameModeSelect({ 
			detail: {
				selectedMode: gamedata[0].mode,
				AIBotPlayerColor: gamedata[0].botColor
			}})
		this.#isHistoryLoaded = true;
	}

	onGameModeSelect(data: unknown) {
		const { detail } = data as { detail: { selectedMode:  gameMode, AIBotPlayerColor: Omit<FigureColor, 'selected'>}};
		this.setMode(detail.selectedMode);
		this.setAIBotColor(detail.AIBotPlayerColor);
		if(this.#mode === 'single' && this.#AIBotPlayerColor === 'white' && this.#moves.length === 0) {
			this.#htmlAdapter.setSinglePlayerBlackColor();
			this.#UIAdater.setSinglePlayerBlackColor();
			setTimeout(() => {
				eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' '), helpReuest: false});
			}, 1500);
		}
	}

	setAIBotColor(color: Omit<FigureColor, 'selected'>){
		this.#AIBotPlayerColor = color;
	}
	setMode(mode: gameMode){
		this.#mode = mode;
	}

	private onPawnTransformResponse(data: unknown) {
		const { detail } = data as { detail: { figureType: FigureType, figureName: string }};
		const selectedFigure = this.#gameManager.getSelectedFigure();
		selectedFigure?.setType(detail.figureType);
		this.#pawnTrasformationController.transformationComplite();
		this.#figureMoveEvent?.setTransform(detail.figureType)
	}

    private async onNextStepResponse(data: unknown) {
		const { detail } = data as {detail: {nextStep: {from: string, to: string,promotion?: string}, helpReuest: boolean}}
		this.unselectFigure();
		await this.makeMove(detail.nextStep);
    }

	private async makeMove(data: {from: string, to: string}) {
		const currentCell = cellRepository.getCell(data.from);
		const currentFigure = currentCell.getFigure();
		const destinationCell = cellRepository.getCell(data.to);
		this.onFigureClick({
			detail: {
				clickedFigure: currentFigure
			}
		})
		return await this.onCellClick( {detail: {
			clickedCell: destinationCell
		}});	
	}

	private collectMoves(data: unknown) {
		const { detail } = data as {detail : {value: { currentCell: string, destinationCell: string }}};
		this.#moves.push(`${detail.value.currentCell}${detail.value.destinationCell}`);
	}

	private onHelpReuest() {
		if(this.#mode === 'multi' && this.#AIBotPlayerColor == this.#gameManager.getCurrentPlayer()) {
			return;
		}
		eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' '), helpReuest: true});	 
	}

	private onUserFigureClick(data: unknown) {
		if(this.#mode === 'single' && this.#AIBotPlayerColor === this.#gameManager.getCurrentPlayer()) {
			return;
		}
		this.onFigureClick(data);
	}

    private onFigureClick(data: unknown) {
        const { detail } = data as { detail: { clickedFigure: Figure }};
        const { clickedFigure } = detail;
		const selectedFigure = this.#gameManager.getSelectedFigure();

        if(selectedFigure && clickedFigure.getCurrentCell().getCanMove()) {
			this.onCellClick({ detail: { clickedCell: clickedFigure.getCurrentCell() } })
            return;
        }

        if(this.#mode === 'multi' && clickedFigure.getColor() !== this.#gameManager.getCurrentPlayer()) {
            return;
        }

        if(selectedFigure && selectedFigure.getName() !== clickedFigure.getName() ) {
            this.#gameManager.unhighliteMoves();
            this.#gameManager.unselectFigure();
			this.#gameManager.setSelectedFigure(clickedFigure);
            this.#gameManager.highliteMoves();
            return;
        }

        if(selectedFigure) {
            this.#gameManager.unhighliteMoves();
            return;
        }

		this.#gameManager.setSelectedFigure(clickedFigure);
        this.#gameManager.highliteMoves();
    }

	private async onUserCellClick(data: unknown) {
		if(this.#mode === 'single' && this.#AIBotPlayerColor === this.#gameManager.getCurrentPlayer()) {
			return;
		}
		await this.onCellClick(data);
	}

    private async onCellClick(data: unknown) {
        const { detail } = data as { detail: { clickedCell: BoardCell }};
        const { clickedCell: destinationCell } = detail;
		const selectedFigure = this.#gameManager.getSelectedFigure();

        if(!selectedFigure) {
            return;
        }
        const currentCell = selectedFigure.getCurrentCell();

		this.#figureMoveEvent = new FigureMoveEvent(
					selectedFigure,
					currentCell.getCellName(),
					destinationCell.getCellName());

		await this.#pawnTrasformationController.pawnTransformation(destinationCell, selectedFigure);

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

	private async onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO};
		this.#moves.pop();
		this.#revertFigureMove.execute(detail);
		await indexedDbWrapper.revertMoveEvent();
		eventBus.dispatchEvent('chagePlayer', {currentPlayer: this.#gameManager.getCurrentPlayer()});
		this.requestFirstWhiteStep();
	}

	private requestFirstWhiteStep() {
		if(!this.#moves.length && this.#mode === 'single' && this.#AIBotPlayerColor === 'white') {
			eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' '), helpReuest: false});
			this.#htmlAdapter.setSinglePlayerBlackColor();
			this.#UIAdater.setSinglePlayerBlackColor();
		}
	}

    private tryEnPassantCapture(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.#gameManager.getSelectedFigure();

        if(!selectedFigure) {
            return false;
        }
        const rightSiblingCellName = currentCell.getRightSibling(selectedFigure.getColor());
        const rightSiblingCell = cellRepository.getCell(rightSiblingCellName);
        const currentCellFigure = currentCell.getFigure();
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure &&  currentCellFigure.getType() === 'Pawn'
            && rightSiblingCell && rightSiblingCell.canEnPassantCupture(selectedFigure.getColor())
            && destinationCell.getCellRow() === rightSiblingCell.getCellRow() && this.#figureMoveEvent
            ) {  
				this.#figureMoveEvent.setIsCapture(rightSiblingCell.getFigure()?.getType());
				this.#figureMoveEvent.isEnPassant(rightSiblingCellName);
				this.captureFigureEnPassant(currentCell, destinationCell, rightSiblingCell);
				
                return true;
        }
        
        const leftSiblingCellName = currentCell.getLeftSibling(selectedFigure.getColor());
        const leftSiblingCell = cellRepository.getCell(leftSiblingCellName);
        if(destinationCell.getCanMove() && !destinationCell.hasFigure() && currentCellFigure && currentCellFigure.getType() === 'Pawn'
            && leftSiblingCell && leftSiblingCell.canEnPassantCupture(selectedFigure.getColor())
            && destinationCell.getCellRow() === leftSiblingCell.getCellRow() && this.#figureMoveEvent
            ) {
				this.#figureMoveEvent.setIsCapture(leftSiblingCell.getFigure()?.getType())
				this.#figureMoveEvent.isEnPassant(leftSiblingCellName);
                this.captureFigureEnPassant(currentCell, destinationCell, leftSiblingCell);
                return true;
        }

        return false;
    }

    private tryRegularCapture(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(!selectedFigure) {	
            return false;
        }

        if(destinationCell.getCanMove() && destinationCell.hasFigure() && destinationCell.hasFigureColor() !== selectedFigure.getColor() && this.#figureMoveEvent) {
			this.#figureMoveEvent.setIsCapture(destinationCell.getFigure()?.getType());
            this.captureFigureRegular(currentCell, destinationCell)
			return true;
        }
        return false;
    }

    private tryMoveFigure(destinationCell: BoardCell, currentCell: BoardCell) {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(destinationCell.getCanMove() && selectedFigure &&  this.#figureMoveEvent) {
            this.moveFigure(currentCell, destinationCell);
            return true;
        }
        return false;
    }

    private unselectFigure() {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(!selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves();
        this.unSelectCurrentFigure();
    }

    private onOutsideClick() {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(!selectedFigure) {
            return;
        }
        this.#gameManager.unhighliteMoves();
        this.unSelectCurrentFigure();
    }

    private unSelectCurrentFigure() {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(!selectedFigure) {
            return;
        }
		this.#gameManager.unselectFigure();
    }

    private moveFigure(currentCell: BoardCell, destinationCell: BoardCell) {
		const selectedFigure = this.#gameManager.getSelectedFigure();
        if(!selectedFigure) {
            return;
        }

        const selectedFigureType = selectedFigure.getType();
        this.#gameManager.unhighliteMoves();
        // this.#selectedFigure.unselect();
        selectedFigure.move(destinationCell);
        currentCell.setFigure(null);

		destinationCell.setFigure(selectedFigure);
	
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
		if(this.#mode === 'multi') {
			eventBus.dispatchEvent('chagePlayer', {currentPlayer: this.#gameManager.getCurrentPlayer()});
		}

		if(!this.#figureMoveEvent) {
			throw new Error('no figure move event');
		}

        if(this.#gameManager.isKingUnderCheck()) {
			this.#figureMoveEvent.isCheck(true);
        }
        if(this.#gameManager.isGameFinished()) {
			this.#figureMoveEvent.isGameEnd(true);
        };
		const figuremoveEvent = this.#figureMoveEvent.toJson();
		
		if(this.#isHistoryLoaded) {
			eventBus.dispatchEvent('figureMove', { value: figuremoveEvent});
			indexedDbWrapper.addEvent(figuremoveEvent);
		}
		
		this.#pawnTrasformationController.animate(figuremoveEvent, selectedFigure);

		if(this.#gameManager.getCurrentPlayer() === this.#AIBotPlayerColor && this.#mode === 'single' && this.#isHistoryLoaded) {
			setTimeout(() => {
				eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#moves.join(' '), helpReuest: false});
		}, 1500)}
		

		this.#figureMoveEvent = null;
		this.#gameManager.unselectFigure();
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