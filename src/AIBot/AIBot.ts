import { eventBus, eventTypes } from "@/infra/EventBus";

const JS_BOT_WORKER_DEV_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

const JS_BOT_WORKER_PROD_PATH = '/chess/dist/stockfish/stockfish-17.1-lite-single-03e3232.js';

const getBotPath = () => {
	if(import.meta.env.DEV) {
		return JS_BOT_WORKER_DEV_PATH;
	}
	return JS_BOT_WORKER_PROD_PATH ;
}

const THINKING_DEPTH = 15;

export class AIBot {
	private botWorker: Worker;
	private readyok = false;
	private uciok = false;
	private nextStep = '';
	
	constructor() {
		this.botWorker = new Worker(getBotPath());
		eventBus.subscribe(eventTypes.nextStepRequest, this.onNextStepRequest.bind(this));

		this.initListeners()
	}

	private initListeners() {
		this.addListeners((e: string) => {
			console.info("Stockfish message:", e);
			if(e === 'uciok') {
				this.uciok = true;
			}
			if(e === 'readyok') {
				this.readyok = true;
			}
			if(e.startsWith('bestmove')) {
				this.nextStep = e.split(' ')[1];
			}
		});
	}

	private addListeners(onMessage: (msg: string) => void) {
		this.botWorker.addEventListener('message', function (e) {
			onMessage(e.data);
		});
	}

	private message(msg: string) {
		this.botWorker.postMessage(msg);
	}

	async init() {
		this.botWorker.postMessage('uci');
		await this.waitUCIOK();
		console.info("UCI OK received from Stockfish");

		this.message('isready');
		await this.waitIsReady();
		console.info("ISREADY OK received from Stockfish");
		eventBus.dispatchEvent(eventTypes.botInited, {})
	}

	private async onNextStepRequest(data: unknown) {
		const { detail } = data as {detail: {moves: string, helpReuest: boolean}};
		this.message('position startpos moves ' + detail.moves);
		this.message(`go depth ${THINKING_DEPTH}`);
		await this.isThinking();
		eventBus.dispatchEvent(eventTypes.nextStepResponse, { nextStep: this.nextStep, helpReuest: !!detail.helpReuest });
		this.nextStep = '';
	}

	private async isThinking() {
		return new Promise<void>((resolve) => {
			const checkValue = () => {
				if(this.nextStep) {
					resolve();
				} else {
					setTimeout(checkValue, 100);
				}
			}
			checkValue();
		});
	}

	private async waitUCIOK() {
		return new Promise<void>((resolve) => {
			const checkValue = () => {
				if(this.uciok) {
					resolve();
				} else {
					setTimeout(checkValue, 100);
				}
			}
			checkValue();
		});
	}

	private async waitIsReady() {
		return new Promise<void>((resolve) => {
			const checkValue = () => {
				if(this.readyok) {
					resolve();
				} else {
					setTimeout(checkValue, 100);
				}
			}
			checkValue();
		});
	}
}