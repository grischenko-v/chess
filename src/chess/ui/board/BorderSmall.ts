import { BoxGeometry, MeshStandardMaterial, Mesh, Vector3 } from 'three';
import { BOARD_BOX_COLOR } from '../../constants';
import fontGeometryGenerator from './FontLoader';

class BorderSmall {
	geometry;
	material;
	mesh;

	constructor(position: Vector3, rotate: boolean = false) {
		this.geometry = new BoxGeometry( 0.5, 1.2, 9 );
		this.material = new MeshStandardMaterial( {color: BOARD_BOX_COLOR} );
		this.mesh = new Mesh( this.geometry, this.material );
		this.mesh.position.x = position.x;
		this.mesh.position.z = position.z;
		this.mesh.receiveShadow = true;
		this.addRowLetters(rotate);
	}

	private addRowLetters(rotate: boolean) {
		let  text = 'A          B          C          D          E          F          G          H';
		if(rotate) {
			text = text.split('          ').reverse().join('          ');
		}
		
		fontGeometryGenerator.generateTextGeometry(text).then(textMesh => {
			const half = 0.6;
			const gap = 0.001;

			textMesh.position.set(0, half + gap, 0)
			textMesh.rotation.z = -Math.PI / 2;
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

export default BorderSmall;