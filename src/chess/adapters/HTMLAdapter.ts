import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import { eventBus, eventTypes } from "../../infra/EventBus";

export class HTMLAdapter {
    #body: HTMLElement;

    constructor() {
        this.#body = document.body;

        eventBus.subscribe('chagePlayer', this.onChangePlayer.bind(this));
		eventBus.subscribe('revertFigureMove', this.onRevertFigureMove.bind(this));
		eventBus.subscribe(eventTypes.figureMove, this.onFigureMove.bind(this));
    }

	private onRevertFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO};
		if(detail.gameend) {
			 this.#body.classList.remove('finished');
		}
	}

    private onChangePlayer() {
        this.#body.classList.toggle('black')
    }

	private onFigureMove(data: unknown) {
		const { detail } = data as { detail: FigureMoveEventDTO};
		if(detail.check) {
			this.onCheked();
		}
		if(detail.gameend) {
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