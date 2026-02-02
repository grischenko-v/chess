import { eventBus, eventTypes } from "@/infra/EventBus";

const JS_BOT_WORKER_DEV_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

const JS_BOT_WORKER_PROD_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

const getBotPath = () => {
	if(import.meta.env.PROD) {
		return JS_BOT_WORKER_PROD_PATH;
	}
	return JS_BOT_WORKER_DEV_PATH;
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

		this.addListeners((e: string) => {
			console.log("Stockfish message:", e);
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
	}

	private async onNextStepRequest(data: unknown) {
		const { detail } = data as {detail: {moves: string, helpReuest: boolean}};
		this.message('position startpos moves ' + detail.moves);
		this.message(`go depth ${THINKING_DEPTH}`);
		await this.isThinking();
		const nextStep = this.nextStep;
		this.nextStep = '';
		eventBus.dispatchEvent(eventTypes.nextStepResponse, { nextStep, helpReuest: !!detail.helpReuest });
	}

	private async isThinking() {
		return new Promise<void>((resolve) => {
			const checkThinking = () => {
				if(this.nextStep) {
					resolve();
				} else {
					setTimeout(checkThinking, 100);
				}
			}
			checkThinking();
		});
	}

	private async waitUCIOK() {
		return new Promise<void>((resolve) => {
			const checkUCI = () => {
				if(this.uciok) {
					resolve();
				} else {
					setTimeout(checkUCI, 100);
				}
			}
			checkUCI();
		});
	}

	private async waitIsReady() {
		return new Promise<void>((resolve) => {
			const checkReady = () => {
				if(this.readyok) {
					resolve();
				} else {
					setTimeout(checkReady, 100);
				}
			}
			checkReady();
		});
	}
}

function isDev() {
	throw new Error("Function not implemented.");
}
