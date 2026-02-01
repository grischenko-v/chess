import { BoxGeometry, MeshStandardMaterial, Mesh, Vector3 } from 'three';
import { BOARD_BOX_COLOR } from '../../constants';

class BorderLarge {
    geometry;
    material;
    mesh;

    constructor(position: Vector3) {
        this.geometry = new BoxGeometry( 8, 1.2, 0.5 );
        this.material = new MeshStandardMaterial( {color: BOARD_BOX_COLOR} );
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