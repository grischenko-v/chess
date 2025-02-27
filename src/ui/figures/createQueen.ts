import {
    Group,
    TorusGeometry,
    MeshStandardMaterial,
    Mesh,
    CylinderGeometry,
    CapsuleGeometry
} from 'three';
import { FigureColor } from '../../domain/Figure';
import { FIGURE_COLOR } from '../../constants';

export const createQueen = (figureColor: FigureColor, name: string): Group => {
    const group = new Group();
    const color = FIGURE_COLOR[figureColor];

    const geometry = new TorusGeometry( 1, 0.6, 17, 30 );
    const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const torus = new Mesh( geometry, material );
    torus.rotateX(Math.PI/2);
    torus.receiveShadow = true;
    torus.castShadow = true;
    group.add(torus);

    const cylindergeometry = new CylinderGeometry( 0.45, 0.85, 5, 52 ); 
    const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const cylinder = new Mesh( cylindergeometry, cylindermaterial );
    cylinder.position.y = 1.5;
    cylinder.receiveShadow = true;
    cylinder.castShadow = true;
    group.add(cylinder);

    // const topTorusgeometry = new TorusGeometry( 0.5, 0.25, 20, 30 );
    // const tourMaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    // const topTorus = new Mesh( topTorusgeometry, tourMaterial );
    // topTorus.rotateX(Math.PI/2);
    // topTorus.position.y = 3;
    // topTorus.receiveShadow = true;
    // topTorus.castShadow = true;
    // group.add(topTorus);

    // const capsulegeometry = new CapsuleGeometry( 0.65, 0.4, 4, 8 ); 
    // const capsulematerial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    // const capsule = new Mesh( capsulegeometry, capsulematerial );
    // capsule.position.y = 4;
    // capsule.receiveShadow = true;
    // capsule.castShadow = true;
    // group.add(capsule);

    group.position.y = 0.6;
    group.scale.set(0.25, 0.25, 0.25);
    group.castShadow = true;
    group.receiveShadow = true;
    group.name = name;

    return group;
}