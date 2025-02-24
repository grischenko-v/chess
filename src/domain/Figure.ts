import { Vector3 } from "three";
import { createFigureFactory } from "../ui/figures/FiguresFactory";

type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #position: Vector3;
    #color: FigureColor;
    #type: FigureType
    #figureGroup: any
    #starage: MoveStrategy;

    constructor(position: Vector3, color: FigureColor, type: FigureType) {
        this.#position = position;
        this.#color = color;
        this.#type = type;
        this.#figureGroup = createFigureFactory({
            type: this.#type,
            position: this.#position,
        })
    }

    getType() {
        return this.#type;
    }

    move(newPosition: Vector3) {
        this.#position = newPosition;
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

