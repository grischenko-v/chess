import { eventBus, eventTypes } from "@/infra/EventBus";
import { promisify } from "@/utils/promisify";

const JS_BOT_WORKER_DEV_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

const JS_BOT_WORKER_PROD_PATH = '/chess/dist/stockfish/stockfish-17.1-lite-single-03e3232.js';

const getBotPath = () => {
	if(import.meta.env.DEV) {
		console.log('DEV');
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
		return promisify(this.nextStep);
	}

	private async waitUCIOK() {
		return promisify(this.uciok);
	}

	private async waitIsReady() {
		return promisify(this.readyok);
	}
}