import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

class BorderLarge {
    geometry;
    material;
    mesh;

    constructor(position: {x: number, z: number}) {
        this.geometry = new BoxGeometry( 8, 1.2, 0.5 );
        this.material = new MeshStandardMaterial( {color: 0xCE8D66} );
        this.mesh = new Mesh( this.geometry, this.material );
        this.mesh.position.x = position.x;
        this.mesh.position.z = position.z;
        this.mesh.receiveShadow = true;
    }

    getMesh() {
        return this.mesh;
    }
}

export default BorderLarge;