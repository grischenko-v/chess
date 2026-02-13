import Dexie, { liveQuery, type Table } from "dexie";
import type { FigureMoveEventDTO } from "./FigureMoveEvent";

type Game = {
	mode: 'single' | 'multi',
	botColor: 'black' | 'white' | undefined,
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

	async initGame(mode: 'single' | 'multi', botColor: 'black' | 'white' | undefined) {
		await this.#game.clear();
		await this.#game.add({
			mode,
			botColor,
		})
	}

	async getEvents() {
    	return await this.#events.toArray();
  	}

	async revertMoveEvent() {
		const last = await this.#events.orderBy("id").last();
		if (last) {
  			await this.#events.delete(last.id);
		}
	}

	getEvents$() {
    	return liveQuery(() => this.#events.toArray());
  	}

	async getGame() {
		return await this.#game.toArray();
	}

	async clearEvents() {
		return await this.#events.clear();
	}
}

const indexedDbWrapper = new IndexedDbWrapper();

export default indexedDbWrapper;