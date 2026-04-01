import { HTMLAdapter } from "../adapters/HTMLAdapter";
import type { UIAdater } from "../adapters/SceneAdapter";
import { type FigureColor, type FigureType } from "../domain/Figure";
import { eventBus, eventTypes } from "../../infra/EventBus";
import { GameManager, type gameMode } from "./GameManager";
import { FigureMoveEvent, type FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import { PawnTrasformationController } from "./PawnTransformationController";
import indexedDbWrapper from "@/infra/IndexedDb";
import { RevertFigureMove } from "./use-cases/RevertFigureMove";
import { FigureMove } from "./use-cases/FigureMove";

export class Application {
    #UIAdater: UIAdater;
    #gameManager: GameManager;
	#figureMoveEvent: FigureMoveEvent | null = null;
	#pawnTrasformationController: PawnTrasformationController;
	#AIBotPlayerColor: Omit<FigureColor, 'selected'> = 'black';
	#htmlAdapter: HTMLAdapter;
	#isHistoryLoaded = false;
	#revertFigureMove: RevertFigureMove;
	#figureMove: FigureMove;

    constructor(UIAdater: UIAdater) {
        this.#UIAdater = UIAdater;
        this.#gameManager = new GameManager();
		this.#pawnTrasformationController = new PawnTrasformationController(UIAdater);
		this.#htmlAdapter = new HTMLAdapter();
		this.#revertFigureMove = new RevertFigureMove(this.#gameManager, this.#UIAdater, this.#pawnTrasformationController);
		this.#figureMove = new FigureMove(this.#gameManager, this.#UIAdater, this.#pawnTrasformationController);

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
			this.#gameManager.addMove(`${event.currentCell}${event.destinationCell}`)
		}
		const gamedata = await indexedDbWrapper.getGame();
		this.onGameModeSelect({ 
			detail: {
				selectedMode: gamedata[0].mode,
				AIBotPlayerColor: gamedata[0].botColor
			}})
		this.#isHistoryLoaded = true;
	}

	private onGameModeSelect(data: unknown) {
		const { detail } = data as { detail: { selectedMode:  gameMode, AIBotPlayerColor: Omit<FigureColor, 'selected'>}};
		this.#gameManager.resetMovesCount()
		this.#gameManager.setMode(detail.selectedMode);
		this.setAIBotColor(detail.AIBotPlayerColor);
		if(this.#gameManager.modeIsSingle() && this.#AIBotPlayerColor === 'white' && this.#gameManager.getMovesCount() === 0) {
			this.#htmlAdapter.setSinglePlayerBlackColor();
			this.#UIAdater.setSinglePlayerBlackColor();
			setTimeout(() => {
				eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#gameManager.getMoveinUCI(), helpReuest: false});
			}, 1500);
		}
	}

	private setAIBotColor(color: Omit<FigureColor, 'selected'>){
		this.#AIBotPlayerColor = color;
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
		const figuremove = await this.#figureMove.execute(data);

		if(!figuremove) {
			return;
		}
		this.#figureMoveEvent = figuremove;
		this.checkGameState();
	}

	private collectMoves(data: unknown) {
		const { detail } = data as {detail : {value: { currentCell: string, destinationCell: string }}};
		this.#gameManager.addMove(`${detail.value.currentCell}${detail.value.destinationCell}`);
	}

	private onHelpReuest() {
		if(this.#gameManager.modeisMulti() && this.#AIBotPlayerColor == this.#gameManager.getCurrentPlayer()) {
			return;
		}
		eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#gameManager.getMoveinUCI(), helpReuest: true});	 
	}

	private async onUserFigureClick(data: unknown) {
		if(this.#gameManager.modeIsSingle() && this.#AIBotPlayerColor === this.#gameManager.getCurrentPlayer()) {
			return;
		}
		
		const figuremove = await this.#figureMove.onFigureClick(data);
		if(!figuremove) {
			return;
		}
		this.#figureMoveEvent = figuremove;
		this.checkGameState();
	}

	private async onUserCellClick(data: unknown) {
		if(this.#gameManager.modeIsSingle() && this.#AIBotPlayerColor === this.#gameManager.getCurrentPlayer()) {
			return;
		}

		const figuremove = await this.#figureMove.onCellClick(data);
		if(!figuremove) {
			return;
		}
		this.#figureMoveEvent = figuremove;
		this.checkGameState();
	}	

	private async onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: {figuremove: FigureMoveEventDTO, reveterdAll: boolean}};
		this.#gameManager.removeMove();
		this.#revertFigureMove.execute(detail.figuremove);
		await indexedDbWrapper.revertMoveEvent();
		eventBus.dispatchEvent('chagePlayer', {currentPlayer: this.#gameManager.getCurrentPlayer()});

		if(!detail.reveterdAll) {
			this.requestFirstWhiteStep();
		}
	}

	private requestFirstWhiteStep() {
		if(!this.#gameManager.getMovesCount() && this.#gameManager.modeIsSingle() && this.#AIBotPlayerColor === 'white') {
			eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#gameManager.getMoveinUCI(), helpReuest: false});
			this.#htmlAdapter.setSinglePlayerBlackColor();
			this.#UIAdater.setSinglePlayerBlackColor();
		}
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

	private checkGameState() {
		const selectedFigure = this.#gameManager.getSelectedFigure();

		if(!selectedFigure) {
			return;
		}
		this.#gameManager.toggleCurrentPlayer();
		if(this.#gameManager.modeisMulti()) {
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

		if(this.#gameManager.getCurrentPlayer() === this.#AIBotPlayerColor && this.#gameManager.modeIsSingle() && this.#isHistoryLoaded) {
			setTimeout(() => {
				eventBus.dispatchEvent(eventTypes.nextStepRequest, {moves: this.#gameManager.getMoveinUCI(), helpReuest: false});
		}, 1500)}
		

		this.#figureMoveEvent = null;
		this.#gameManager.unselectFigure();
	}
}