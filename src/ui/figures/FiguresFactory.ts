import {Group, Vector3} from 'three';
import {createPawn} from './Pawn';
import { gsap } from 'gsap';
import { getFigureColor } from '../../utils/getFigureColor';

type figureType = 'Pawn';

export const createFigureFactory = (
    { type, position, color, name }: {type: figureType, position: Vector3, color: TFigureColor, name: string} ) => {
    switch(type) {
        case 'Pawn':
            const pawn = createPawn(color, name);
            return new FigurePawn(pawn, position, color);
    }
}

type TFigureColor = 'white' | 'black';

const SELECTED_COLOR = 0x0000F7;

export abstract class FigureBase {
    mesh: any;
    color: TFigureColor;

    constructor(group: Group, position: Vector3, color: TFigureColor) {
        this.mesh = group;
        this.mesh.position.set(position.x, 0.5, position.z);
        this.color = color;
    }

    getMesh() {
        return this.mesh;
    }

    getPosition() {
        return this.mesh.position;
    }

    unselect() {
        const defualtColor = getFigureColor(this.color);
        this.changeFigureColor(defualtColor);
    }

    select() {
        this.changeFigureColor(SELECTED_COLOR);
    }

    private changeFigureColor(color: number) {
        for ( let i = 0; i < this.mesh.children.length; i ++ ) {
            this.mesh.children[i]?.material.color.setHex(color)
          }
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