
type FigureColor = 'white' | 'black';
type FigureType = 'Pawn';

export class Figure {
    #position: string;
    #color: FigureColor;
    #type: FigureType
    #starage: MoveStrategy;

    constructor(position: string, color: FigureColor, type: FigureType) {
        this.#position = position;
        this.#color = color;
        this.#type = type;
    }

    getType() {
        return this.#type;
    }

    move(newPosition: string) {
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

