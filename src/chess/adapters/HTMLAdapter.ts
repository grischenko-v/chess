import { eventBus } from "../infra/EventBus";

export class HTMLAdapter {
    #body: HTMLElement;

    constructor() {
        this.#body = document.body;

        eventBus.subscribe('chagePlayer', this.onChangePlayer.bind(this));
        eventBus.subscribe('checked', this.onCheked.bind(this));
        eventBus.subscribe('gameFinished', this.onGameFinished.bind(this));
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