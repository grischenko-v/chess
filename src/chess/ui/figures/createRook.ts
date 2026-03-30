import {
	Group,
	TorusGeometry,
	MeshStandardMaterial,
	Mesh,
	CylinderGeometry,
} from 'three';
import type { FigureColor } from '../../domain/Figure';
import { FIGURE_COLOR } from '../../constants';

export const createRook = (figureColor: FigureColor, name: string): Group => {
	const group = new Group();
	const color = FIGURE_COLOR[figureColor]

	const geometry = new TorusGeometry( 1, 0.6, 17, 30 );
	const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const torus = new Mesh( geometry, material );
	torus.rotateX(Math.PI/2);
	torus.receiveShadow = true;
	torus.castShadow = true;
	group.add(torus);

	const cylindergeometry = new CylinderGeometry( 0.5, 1, 3, 52 ); 
	const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const cylinder = new Mesh( cylindergeometry, cylindermaterial );
	cylinder.position.y = 1.5;
	cylinder.receiveShadow = true;
	cylinder.castShadow = true;
	group.add(cylinder);

	const topGeometry = new CylinderGeometry( 0.75, 0.75, 1, 30 );
	const topMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const topTorus = new Mesh( topGeometry, topMaterial );
	topTorus.position.y = 3.5;
	topTorus.receiveShadow = true;
	topTorus.castShadow = true;
	group.add(topTorus);

	group.position.y = 0.6;
	group.scale.set(0.25, 0.25, 0.25);
	group.castShadow = true;
	group.receiveShadow = true;
	group.name = name;

	return group;
}