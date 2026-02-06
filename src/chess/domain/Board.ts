import { Group, Vector3 } from "three";
import BorderLarge from "../ui/board/BorderLarge";
import BorderSmall from "../ui/board/BorderSmall";
import Plane from "../ui/board/Plane";

export class Board {
	#group = new Group;

	constructor() {
		this.initBoardBounds();
	}

	private initBoardBounds() {
		this.#group.add(new Plane().getMesh());

		this.#group.add(new BorderLarge(({x: 0, z: 4.25} as Vector3), true).getMesh());
		this.#group.add(new BorderLarge(({x: 0, z: -4.25} as Vector3), false).getMesh());

		this.#group.add(new BorderSmall(({x: 4.25, z: 0} as Vector3), true).getMesh());
		this.#group.add(new BorderSmall(({x: -4.25, z: 0} as Vector3), false).getMesh());

	}

	getMesh() {
		return this.#group;
	}
}
