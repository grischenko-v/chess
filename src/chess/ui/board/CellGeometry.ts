import {
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
} from 'three';
import { BOARD_CELL_COLOR } from '../../constants';

export type CELL_COLOR_TYPE = keyof typeof BOARD_CELL_COLOR;

export class CellGeometry {
    #geometry: BoxGeometry;
    #material: MeshStandardMaterial;
    #mesh: Mesh<BoxGeometry, MeshStandardMaterial>;

    constructor(position: {x: number, z: number}, color: CELL_COLOR_TYPE, name: string) {
        this.#geometry = new BoxGeometry( 1, 1, 1 );
        this.#material = new MeshStandardMaterial( { color: BOARD_CELL_COLOR[color] } );
        this.#mesh = new Mesh( this.#geometry, this.#material );
        this.#mesh.position.x = position.x;
        this.#mesh.position.z = position.z;
        this.#mesh.receiveShadow = true;
        this.#mesh.name = name;
    }

    getPosition() {
        return this.#mesh.position;
    }

    getName() {
        return this.#mesh.name;
    }

    getMesh() {
        return this.#mesh;
    }
}
