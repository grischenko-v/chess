import { Figure, FigureColor, FigureType } from "../domain/Figure";

export interface IFigureRepository {
    addFigure: (figure: Figure) => void,
    getFigure: (name: string) => Figure,
    deleteFigure: (figure: Figure) => void;
}

class FigureRepository implements IFigureRepository {
    #figures: Record<string, Figure> = {};

    addFigure(figure: Figure) {
        const name = figure.getName();
        this.#figures[name] = figure;
    }

    getFigure(name: string): Figure {
        return this.#figures[name];
    }

    deleteFigure(figure: Figure) {
        const figureName = figure.getName();
        delete this.#figures[figureName];
    }

    getFiguresByColor(color: FigureColor) {
        const result: Figure[] = [];
        Object.keys(this.#figures).forEach(figureName => {
            if(this.#figures[figureName].getColor() === color) {
                result.push(this.#figures[figureName]);
            }
        })
        return result;
    }

    getFiguresByType(type: FigureType) {
        const result: Figure[] = [];
        Object.keys(this.#figures).forEach(figureName => {
            if(this.#figures[figureName].getType() === type) {
                result.push(this.#figures[figureName]);
            }
        })
        return result;
    }
}

export const figureRepository = new FigureRepository();