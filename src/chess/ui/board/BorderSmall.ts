import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';
import { BOARD_BOX_COLOR } from '../../constants';

class BorderSmall {
    geometry;
    material;
    mesh;

    constructor(position: {x: number, z: number}) {
        this.geometry = new BoxGeometry( 0.5, 1.2, 9 );
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

export default BorderSmall;