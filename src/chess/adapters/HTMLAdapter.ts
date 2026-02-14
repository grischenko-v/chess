import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import { eventBus, eventTypes } from "../../infra/EventBus";

export class HTMLAdapter {
    #body: HTMLElement;

    constructor() {
        this.#body = document.body;

        eventBus.subscribe('chagePlayer', this.onChangePlayer.bind(this));
		eventBus.subscribe(eventTypes.revertFigureMove, this.onRevertFigureMove.bind(this));
		eventBus.subscribe(eventTypes.figureMove, this.onFigureMove.bind(this));
		eventBus.subscribe(eventTypes.helpRequest, this.onRequestHelp.bind(this));
		eventBus.subscribe(eventTypes.nextStepResponse, this.onNextStepResponse.bind(this));
    }

	private onRequestHelp() {
		this.#body.classList.add('locked');
	}

	private onNextStepResponse() {
		this.#body.classList.remove('locked');
	}

	private onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO };
		if(detail.gameend) {
			 this.#body.classList.remove('finished');
		}
	}

	setSinglePlayerBlackColor() {
		this.#body.classList.add('black');
	}

    private onChangePlayer() {
        this.#body.classList.toggle('black')
    }

	private onFigureMove(data: unknown) {
		const { detail } = data as { detail: { value: FigureMoveEventDTO }};
		if(detail.value.check) {
			this.onCheked();
		}
		if(detail.value.gameend) {
			this.onGameFinished();
		}
	}

    private onCheked() {
        this.#body.classList.add('checked');
        setTimeout(() => this.#body.classList.remove('checked'), 1000)
    }

    private onGameFinished() {
        this.#body.classList.add('finished')
    }
}