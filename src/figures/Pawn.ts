import {
    Group,
    TorusGeometry,
    MeshStandardMaterial,
    Mesh,
    CylinderGeometry,
    CapsuleGeometry
} from 'three';

const color = 0x555;

export const createPawn = (): Group => {
    const group = new Group();

    const geometry = new TorusGeometry( 1, 0.5, 17, 30 );
    const material = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const torus = new Mesh( geometry, material );
    torus.rotateX(Math.PI/2);
    torus.receiveShadow = true;
    torus.castShadow = true;
    group.add(torus);

    const cylindergeometry = new CylinderGeometry( 0.3, 1, 2, 32 ); 
    const cylindermaterial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const cylinder = new Mesh( cylindergeometry, cylindermaterial );
    cylinder.position.y = 1.5;
    cylinder.receiveShadow = true;
    cylinder.castShadow = true;
    group.add(cylinder);

    const capsulegeometry = new CapsuleGeometry( 0.5, 0.25, 4, 8 ); 
    const capsulematerial = new MeshStandardMaterial( { color: color, wireframe: false } ); 
    const capsule = new Mesh( capsulegeometry, capsulematerial );
    capsule.position.y = 3;
    capsule.receiveShadow = true;
    capsule.castShadow = true;
    group.add(capsule);

    group.position.y = 0.6;
    group.scale.set(0.25, 0.25, 0.25);
    group.castShadow = true;
    group.receiveShadow = true;
    group.name = 'test';

    return group;
}