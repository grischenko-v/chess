const JS_BOT_WORKER_PATH = '/chess/dist/public/stockfish/stockfish-17.1-lite-single-03e3232.js';

export class AIBot {
	botWorker: Worker;
	
	constructor() {
		this.botWorker = new Worker(JS_BOT_WORKER_PATH);
	}

	addListeners(onMessage: (msg: string) => void) {
		this.botWorker.addEventListener('message', function (e) {
			onMessage(e.data);
		});
	}

	message(msg: string) {
		this.botWorker.postMessage(msg);
	}
}