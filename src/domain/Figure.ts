import { Vector3 } from "three";
import { createFigureFactory, FigureBase } from "../ui/figures/FiguresFactory";

export type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #position: Vector3;
    #color: FigureColor;
    #type: FigureType
    #figure: FigureBase;
    #starage: MoveStrategy;

    constructor(position: Vector3, color: FigureColor, type: FigureType) {
        this.#position = position;
        this.#color = color;
        this.#type = type;
        this.#figure = createFigureFactory({
            type: this.#type,
            position: this.#position,
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
        this.#position = newPosition;
        this.#figure.move(newPosition);
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


// a b c d e f g h
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

