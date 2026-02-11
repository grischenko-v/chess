import Dexie, { type Table } from "dexie";
import type { FigureMoveEventDTO } from "./FigureMoveEvent";

class IndexedDbWrapper {
	#db: Dexie;
	#events: Table<FigureMoveEventDTO, string>


	constructor() {
		this.#db = new Dexie('ChessEventsDb');
		this.#db.version(1).stores({
			events: '++id',
		})
		this.#events = this.#db.table<FigureMoveEventDTO, string>("events");
	}

	async addEvent(event: FigureMoveEventDTO) {
		await this.#events.add(event);
	}

	get events() {
    	return this.#events;
  	}

}

const indexedDbWrapper = new IndexedDbWrapper();

export default indexedDbWrapper;