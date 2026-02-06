import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Mesh, MeshStandardMaterial } from 'three';


const fontPath = '/chess/dist/fonts/helvetiker_regular.typeface.json';

class FontGeometryGenerator {
	private fontLoader: FontLoader;

	constructor() {
		this.fontLoader = new FontLoader();
	}

	loadFont(): Promise<Font> {
		return new Promise((resolve, reject) => {
			this.fontLoader.load(fontPath, resolve, undefined, reject);
	});
	}

	async generateTextGeometry(text: string) {
		const font = await this.loadFont();
		const textGeometry = new TextGeometry(text, {
			font,
			size: 0.22,  
			height: 0.03,
			curveSegments: 8,
			bevelEnabled: true,
			bevelThickness: 0.005,
			bevelSize: 0.003,
			bevelSegments: 2
		});
		textGeometry.computeBoundingBox();
		textGeometry.center();
		
		const textMat = new MeshStandardMaterial({ color: 0x111111 });
		const textMesh = new Mesh(textGeometry, textMat);

		return textMesh;
	}
}

const fontGeometryGenerator = new FontGeometryGenerator();

export default fontGeometryGenerator;

