import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

class BorderSmall {
    geometry;
    material;
    mesh;

    constructor(position: any) {
        this.geometry = new BoxGeometry( 0.5, 1.2, 7 );
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

export default BorderSmall;