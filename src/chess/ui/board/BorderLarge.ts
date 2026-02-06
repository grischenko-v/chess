import { BoxGeometry, MeshStandardMaterial, Mesh, Vector3 } from 'three';
import { BOARD_BOX_COLOR } from '../../constants';
import fontGeometryGenerator from './FontLoader';

class BorderLarge {
    geometry;
    material;
    mesh;

    constructor(position: Vector3, rotate: boolean = false) {
        this.geometry = new BoxGeometry( 8, 1.2, 0.5 );
        this.material = new MeshStandardMaterial( {color: BOARD_BOX_COLOR} );
        this.mesh = new Mesh( this.geometry, this.material );
        this.mesh.position.x = position.x;
        this.mesh.position.z = position.z;
        this.mesh.receiveShadow = true;
		this.addRowNumbers(rotate)
    }

	private addRowNumbers (rotate: boolean) {
		let  text = '1          2          3          4          5          6          7          8';
		if(rotate) {
			text = text.split('          ').reverse().join('          ');
		}
		fontGeometryGenerator.generateTextGeometry(text).then(textMesh => {
			const half = 0.6;
			const gap = 0.001;

			textMesh.position.set(0, half + gap, 0)
			textMesh.rotation.x = -Math.PI / 2;
			if(rotate) {
				textMesh.rotation.x = Math.PI / 2;
				textMesh.rotation.y = 2 / 2 * Math.PI;
			}
			this.mesh.add(textMesh);
		})
	}

    getMesh() {
        return this.mesh;
    }
}

export default BorderLarge;