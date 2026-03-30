import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';
import { BOARD_BOX_COLOR } from '../../constants';

class Plane {
	geometry;
	material;
	mesh;

	constructor() {
		this.geometry = new BoxGeometry( 8, 0.125, 8 );
		this.material = new MeshStandardMaterial( {color: BOARD_BOX_COLOR} );
		this.mesh = new Mesh( this.geometry, this.material );
		this.mesh.position.y = -0.5;

		this.mesh.receiveShadow = true;
	}

	getMesh() {
		return this.mesh;
	}
}

export default Plane;