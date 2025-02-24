import {
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
    Object3D,
} from 'three';

const CELL_COLOR = {
    black: 0x231F20,
    white: 0xEFE6DD
} as const;

export type CELL_COLOR_TYPE = keyof typeof CELL_COLOR;

export class CellGeometry {
    #geometry: BoxGeometry;
    #material: MeshStandardMaterial;
    #mesh: Object3D;
    #name: string

    constructor(position: any, color: CELL_COLOR_TYPE, name: string) {
        this.#geometry = new BoxGeometry( 1, 1, 1 );
        this.#material = new MeshStandardMaterial( { color: CELL_COLOR[color] } );
        this.#mesh = new Mesh( this.#geometry, this.#material );
        this.#mesh.position.x = position.x;
        this.#mesh.position.z = position.z;
        this.#mesh.receiveShadow = true;
        this.#name = name;
    }

    getPosition() {
        return this.#mesh.position;
    }

    getName() {
        return this.#name;
    }

    getMesh() {
        return this.#mesh;
    }
}
