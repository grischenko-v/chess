import {
    Group,
    TorusGeometry,
    MeshStandardMaterial,
    Mesh,
    CylinderGeometry,
    CapsuleGeometry,
    Matrix4
} from 'three';
import { FigureColor } from '../../domain/Figure';
import { FIGURE_COLOR } from '../../constants';

export const createKight = (figureColor: FigureColor, name: string): Group => {
    const group = new Group();
    const color = FIGURE_COLOR[figureColor]

    const geometry = new TorusGeometry( 1, 0.6, 17, 30 );
    const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const torus = new Mesh( geometry, material );
    torus.rotateX(Math.PI/2);
    torus.receiveShadow = true;
    torus.castShadow = true;
    group.add(torus);

    const cylindergeometry = new CylinderGeometry( 0.5, 1.1, 4.75, 4 )
    cylindergeometry.applyMatrix4( new Matrix4().makeRotationZ( figureColor === 'black' ? Math.PI / 12 : - Math.PI / 12 ) ); 
    const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const cylinder = new Mesh( cylindergeometry, cylindermaterial );
    cylinder.position.y = 2;
    cylinder.position.x = 0.45;
    cylinder.receiveShadow = true;
    cylinder.castShadow = true;
    group.add(cylinder);


    const headgeometry = new CylinderGeometry( 0.4, 0.7, 2.5, 3 );
    const headmaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const head = new Mesh( headgeometry, headmaterial );
    head.position.y = 3.5;
    head.rotateZ(figureColor === 'black' ? -Math.PI/2 : Math.PI/2);
    head.rotateY(figureColor === 'black' ? -Math.PI/2 : Math.PI/2);
    head.rotateX(-Math.PI/4);
    head.position.x = figureColor === 'black' ? 0.75 : 0.1;
    head.receiveShadow = true;
    head.castShadow = true;
    group.add(head);

    group.position.y = 0.6;
    group.scale.set(0.25, 0.25, 0.25);
    group.castShadow = true;
    group.receiveShadow = true;
    group.name = name;

    return group;
}