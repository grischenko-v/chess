import {
	Group,
	TorusGeometry,
	MeshStandardMaterial,
	Mesh,
	CylinderGeometry,
	CapsuleGeometry,
} from 'three';
import type { FigureColor } from '../../domain/Figure';
import { FIGURE_COLOR } from '../../constants';

export const createKing = (figureColor: FigureColor, name: string): Group => {
	const group = new Group();
	const color = FIGURE_COLOR[figureColor];

	const bottomTourGeometry = new TorusGeometry( 1, 0.3, 17, 30 );
	const bottomTourMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const bottomTorus = new Mesh( bottomTourGeometry, bottomTourMaterial );
	bottomTorus.rotateX(Math.PI/2);
	bottomTorus.receiveShadow = true;
	bottomTorus.castShadow = true;
	group.add(bottomTorus);

	const geometry = new TorusGeometry( 1.1, 0.5, 17, 30 );
	const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const torus = new Mesh( geometry, material );
	torus.rotateX(Math.PI/2);
	torus.receiveShadow = true;
	torus.position.y = 0.6;
	torus.castShadow = true;
	group.add(torus);

	const topTourgeometry = new TorusGeometry( 1, 0.4, 17, 30 );
	const topTourMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const topTour = new Mesh( topTourgeometry, topTourMaterial );
	topTour.rotateX(Math.PI/2);
	topTour.receiveShadow = true;
	topTour.position.y = 1.2;
	topTour.castShadow = true;
	group.add(topTour);

	const cylindergeometry = new CylinderGeometry( 0.55, 0.95, 5.1, 52 ); 
	const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const cylinder = new Mesh( cylindergeometry, cylindermaterial );
	cylinder.position.y = 2.75;
	cylinder.receiveShadow = true;
	cylinder.castShadow = true;
	group.add(cylinder);

	const headTourgeometry = new TorusGeometry( 0.3, 0.4, 17, 30 );
	const headTourMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const headTour = new Mesh( headTourgeometry, headTourMaterial );
	headTour.rotateX(Math.PI/2);
	headTour.receiveShadow = true;
	headTour.position.y = 4.35;
	headTour.castShadow = true;
	group.add(headTour);


	const headTourgeometry2 = new TorusGeometry( 0.3, 0.4, 17, 30 );
	const headTourMaterial2 = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const headTour2 = new Mesh( headTourgeometry2, headTourMaterial2 );
	headTour2.rotateX(Math.PI/2);
	headTour2.receiveShadow = true;
	headTour2.position.y = 4.4;
	headTour2.castShadow = true;
	group.add(headTour2);

	const headGeometry = new CylinderGeometry( 0.8, 0.15, 2, 8 );
	const headMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const headTorus = new Mesh( headGeometry, headMaterial );
	headTorus.position.y = 4.85;
	headTorus.receiveShadow = true;
	headTorus.castShadow = true;
	group.add(headTorus);

	const capsulegeometry = new CapsuleGeometry( 0.5, 0.25, 4, 8 ); 
	const capsulematerial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
	const capsule = new Mesh( capsulegeometry, capsulematerial );
	capsule.position.y = 5.75;
	capsule.receiveShadow = true;
	capsule.castShadow = true;
	group.add(capsule);


	group.position.y = 0.6;
	group.scale.set(0.25, 0.25, 0.25);
	group.castShadow = true;
	group.receiveShadow = true;
	group.name = name;

	return group;
}