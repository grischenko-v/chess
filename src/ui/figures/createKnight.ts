import {
    Group,
    TorusGeometry,
    MeshStandardMaterial,
    Mesh,
    CylinderGeometry,
    CapsuleGeometry
} from 'three';
import { FigureColor } from '../../domain/Figure';
import { getFigureColor } from '../../utils/getFigureColor';

export const createKight = (figureColor: FigureColor, name: string): Group => {
    const group = new Group();
    const color = getFigureColor(figureColor)

    const geometry = new TorusGeometry( 1, 0.6, 17, 30 );
    const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const torus = new Mesh( geometry, material );
    torus.rotateX(Math.PI/2);
    torus.receiveShadow = true;
    torus.castShadow = true;
    group.add(torus);

    const cylindergeometry = new CylinderGeometry( 0.5, 1, 5.25, 4 ); 
    const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const cylinder = new Mesh( cylindergeometry, cylindermaterial );
    cylinder.position.y = 1.5;
    cylinder.rotateY(Math.PI/4);
    cylinder.receiveShadow = true;
    cylinder.castShadow = true;
    group.add(cylinder);


    const headgeometry = new CapsuleGeometry( 0.7, 0.7, 4, 4 );
    const headmaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const head = new Mesh( headgeometry, headmaterial );
    head.position.y = 3.5;
    head.rotateZ(Math.PI/2);
    head.rotateY(figureColor === 'black' ? -Math.PI/2 : Math.PI/2);
    head.rotateX(-Math.PI/4);
    head.position.x = figureColor === 'black' ? 0.25 : -0.25;
    head.receiveShadow = true;
    head.castShadow = true;
    group.add(head);
    // const capsulegeometry = new CapsuleGeometry( 0.5, 0.25, 4, 8 ); 
    // const capsulematerial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    // const capsule = new Mesh( capsulegeometry, capsulematerial );
    // capsule.position.y = 3;
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