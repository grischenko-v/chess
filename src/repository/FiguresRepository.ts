import { Figure } from "../domain/Figure";

export interface IFigureRepository {
    addFigure: (cell: Figure) => void,
    getFigure: (name: string) => Figure 
}

export class FigureRepository implements IFigureRepository {
    #cells: Record<string, Figure> = {};

    addFigure(figure: Figure) {
        const name = figure.getName();
        this.#cells[name] = figure;
    }

    getFigure(name: string): Figure {
        return this.#cells[name];
    }
}

export const figureRepository = new FigureRepository();