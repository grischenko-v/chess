import {Group, Vector3} from 'three';
import {createPawn} from './Pawn';
import { gsap } from 'gsap';

type figureType = 'Pawn';

export const createFigureFactory = ({ type, position, color }: {type: figureType, position: Vector3, color: TFigureColor} ) => {
    switch(type) {
        case 'Pawn':
            const pawn = createPawn(color);
            return new FigurePawn(pawn, position, color);
    }
}

type TFigureColor = 'white' | 'black';

export abstract class FigureBase {
    mesh: Group;
    color: TFigureColor;

    constructor(group: Group, position: Vector3, color: TFigureColor) {
        this.mesh = group;
        this.mesh.position.set(position.x, 0.5, position.z);
        this.color = color;
    }

    getMesh() {
        return this.mesh;
    }

    abstract move: (position: Vector3) => void;
}

class FigurePawn extends FigureBase {
    move = (position: Vector3) => {
        gsap.to(this.mesh.position, {
            duration: 1,
            x: position.x,
            z: position.z,
            onComplete: () => this.mesh.position.set(position.x, 0.5, position.z),
        });
    };
}