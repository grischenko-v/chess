const JS_BOT_WORKER_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

type BotState = 'uciok' | 'readyok' | 'init';



export class AIBot {
	botWorker: Worker;
	readyok = false;
	uciok = false;
	state: BotState = 'init';
	
	constructor() {
		this.botWorker = new Worker(JS_BOT_WORKER_PATH);

		this.addListeners((e: string) => {
			if(e === 'uciok') {
				this.uciok = true;
			}
			if(e === 'readyok') {
				this.readyok = true;
			}
		});
	}

	addListeners(onMessage: (msg: string) => void) {
		this.botWorker.addEventListener('message', function (e) {
			onMessage(e.data);
		});
	}

	message(msg: string) {
		this.botWorker.postMessage(msg);
	}

	async init() {
		this.botWorker.postMessage('uci');
		await this.waitUCIOK();
		console.info("UCI OK received from Stockfish");

		this.botWorker.postMessage('isready');
		await this.waitIsReady();
		console.info("ISREADY OK received from Stockfish");
		this.botWorker.postMessage('ucinewgame');
	}

	async waitUCIOK() {
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

	async waitIsReady() {
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