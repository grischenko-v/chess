import {Group} from 'three';
import {createPawn} from './Pawn';
import { gsap } from 'gsap';


type figureType = 'pawn';

export const createFigureFactory = ({ type, position }: {type: figureType, position?: TFigurePosition} ) => {
    switch(type) {
        case 'pawn':
            const pawn = createPawn();
            return new FigurePawn(pawn, position);
    }
}

type TFigurePosition = {
    x: number,
    y: number,
    z: number,
};

type TFigureColor = 'white' | 'black';

abstract class FigureBase {
    mesh: Group;
    color: TFigureColor;

    constructor(group: Group, position: TFigurePosition = {x: 0, y: 0, z: 0}, color: string = 'white') {
        this.mesh = group;
        this.mesh.position.set(position.x, 0.5, position.z);
    }

}

class FigurePawn extends FigureBase {
    move = (position: any) => {
    gsap.to(this.mesh.position, {
		duration: 1,
		x: position.x,
        z: position.z,
        onComplete: () => this.mesh.position.set(position.x, 0.5, position.z),
	});
    };
}