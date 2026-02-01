

const WASM_TEST_BYTES = Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00);
const WASM_BOT_WORKER_PATH = '/chess/dist/stockfish/stockfish.wasm.js';
const JS_BOT_WORKER_PATH = '/chess/dist/public/stockfish/stockfish.js';

export class AIBot {
	botWorker: Worker;
	
	constructor() {
		const wasmSupported = this.checkWasmSupported();
		this.botWorker = new Worker(wasmSupported ? WASM_BOT_WORKER_PATH : JS_BOT_WORKER_PATH);
	}

	addListeners(onMessage: (msg: string) => void) {
		this.botWorker.addEventListener('message', function (e) {
			onMessage(e.data);
		});
	}

	message(msg: string) {
		this.botWorker.postMessage(msg);
	}

	checkWasmSupported() {
		return typeof WebAssembly === 'object' && WebAssembly.validate(WASM_TEST_BYTES);
	}
}