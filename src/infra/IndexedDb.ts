import Dexie, { type Table } from "dexie";
import type { FigureMoveEventDTO } from "./FigureMoveEvent";

type Game = {
	mode: 'single' | 'multi',
	selectedColor: 'black' | 'white' | undefined,
}

class IndexedDbWrapper {
	#eventsdb: Dexie;

	#game: Table<Game, string>;
	#events: Table<FigureMoveEventDTO, string>


	constructor() {
		this.#eventsdb = new Dexie('ChessDb');
		this.#eventsdb.version(1).stores({
			events: '++id',
			game: '++id',
		})
		this.#events = this.#eventsdb.table<FigureMoveEventDTO, string>("events");
		this.#game = this.#eventsdb.table<Game, string>("game");
	}

	async addEvent(event: FigureMoveEventDTO) {
		await this.#events.add(event);
	}

	async initGame(mode: 'single' | 'multi', selectedColor: 'black' | 'white' | undefined) {
		await this.#game.clear();
		await this.#game.add({
			mode,
			selectedColor,
		})
	}

	async getEvents() {
    	return await this.#events.toArray();
  	}

	async clearEvents() {
		return await this.#events.clear();
	}
}

const indexedDbWrapper = new IndexedDbWrapper();

export default indexedDbWrapper;