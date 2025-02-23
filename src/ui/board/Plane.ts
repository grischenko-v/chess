import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

class Plane {
    geometry;
    material;
    mesh;

    constructor() {
        this.geometry = new BoxGeometry( 8, 0.125, 8 );
        this.material = new MeshStandardMaterial( {color: 0xCE8D66} );
        this.mesh = new Mesh( this.geometry, this.material );
        this.mesh.position.y = -0.5;

        this.mesh.receiveShadow = true;
    }

    getMesh() {
        return this.mesh;
    }
}

export default Plane;