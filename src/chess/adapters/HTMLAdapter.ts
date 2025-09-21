import type { FigureMoveEventDTO } from "@/infra/FigureMoveEvent";
import { eventBus } from "../../infra/EventBus";

export class HTMLAdapter {
    #body: HTMLElement;

    constructor() {
        this.#body = document.body;

        eventBus.subscribe('chagePlayer', this.onChangePlayer.bind(this));
        eventBus.subscribe('checked', this.onCheked.bind(this));
        eventBus.subscribe('gameFinished', this.onGameFinished.bind(this));
		eventBus.subscribe('revertFigureMove', this.onRevertFigureMove.bind(this));
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

    private onCheked() {
        this.#body.classList.add('checked');
        setTimeout(() => this.#body.classList.remove('checked'), 1000)
    }

    private onGameFinished() {
        this.#body.classList.add('finished')
    }
}