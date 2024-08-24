import {
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
} from 'three';

class Cell {
    geometry;
    material;
    mesh;
    name;
    color;
    figure;

    constructor(position: any, color: any, name: string) {
        this.geometry = new BoxGeometry( 1, 1, 1 );
        this.material = new MeshStandardMaterial( { color: color } );
        this.mesh = new Mesh( this.geometry, this.material );
        this.mesh.position.x = position.x;
        this.mesh.position.z = position.z;
        this.mesh.receiveShadow = true;
        this.name = name;
        this.color = '';
        this.figure = '';
    }

    setColor(color: string) {

    }

    getPosition() {
        return this.mesh.position;
    }

    getMesh() {
        return this.mesh;
    }

    getName() {
        return this.name;
    }
}

export default Cell;