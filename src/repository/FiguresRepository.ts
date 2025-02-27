import { Figure } from "../domain/Figure";

export interface IFigureRepository {
    addFigure: (figure: Figure) => void,
    getFigure: (name: string) => Figure,
    deleteFigure: (figure: Figure) => void;
}

class FigureRepository implements IFigureRepository {
    #cells: Record<string, Figure> = {};

    addFigure(figure: Figure) {
        const name = figure.getName();
        this.#cells[name] = figure;
    }

    getFigure(name: string): Figure {
        return this.#cells[name];
    }

    deleteFigure(figure: Figure) {
        const figureName = figure.getName();
        delete this.#cells[figureName];
    }
}

export const figureRepository = new FigureRepository();