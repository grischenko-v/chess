import { Vector3 } from "three";
import { createFigureFactory, FigureBase } from "../ui/figures/FiguresFactory";

export type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #color: FigureColor;
    #type: FigureType
    #figure: FigureBase;
    #starage: MoveStrategy;

    constructor(position: Vector3, color: FigureColor, type: FigureType) {
        this.#color = color;
        this.#type = type;
        this.#figure = createFigureFactory({
            type: this.#type,
            position: position,
            color: this.#color,
        })
    }

    getMesh() {
        return this.#figure.getMesh();
    }

    getType() {
        return this.#type;
    }

    move(newPosition: Vector3) {
        this.#figure.move(newPosition);
    }

    getPosition() {
        return this.#figure.getPosition();
    }

    setMoveStrategy(strategy: MoveStrategy) {
        this.#starage = strategy;
    }
}

class MoveStrategy {
    canMove() {
        
    }
}

class PawnMoveStrategy extends MoveStrategy{
    canmove(): string[] {
        return ['e4'];
    }
}
