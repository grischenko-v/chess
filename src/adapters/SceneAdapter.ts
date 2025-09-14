import { scene } from "../infra/Scene";
import { Figure, FigureColor, FigureType } from "../domain/Figure";
import { Object3D } from "three";
import { RaycastController } from "./RaycastController";
import { BLACK_FIGURES_INITIAL_POSITIONS, columns, rows, WHITE_FIGURES_INITIAL_POSITIONS } from "../constants";
import { createBoard } from "../utils/createBoard";
import { BoardCell } from "../domain/BoardCell";
import { figureRepository } from "../repository/FiguresRepository";
import { cellRepository } from "../repository/CellRepository";

interface ISceenObject {
    getMesh: () => Object3D;
}

export interface UIAdater {
    remove: (deletedFigure: ISceenObject) => void;
}

class SceneAdapter {
    #scene = scene
    #raycastController: RaycastController;

    constructor() {
        this.#raycastController = new RaycastController();
        this.createBoard();
        this.initFigures();
        this.animate();
    }

    private draw(sceenObject: ISceenObject) {
        this.#scene.addObject(sceenObject.getMesh());
    }

    private animate() {
        this.#scene.animate();
    }

    remove(deletedFigure: ISceenObject) {
        this.#scene.remove(deletedFigure.getMesh());
    }

    private initFigure(cellName: string, color: FigureColor, type: FigureType) {
        const cell = cellRepository.getCell(cellName);
        const position = cell.getCellPosition();
        const figure = new Figure(position, color, type, cell)
        cell.setFigure(figure);
        this.draw(figure.getFigure())
        figureRepository.addFigure(figure);
    }

    private initFigures() {
        Object.keys(BLACK_FIGURES_INITIAL_POSITIONS).forEach((figureType: FigureType) => {
            BLACK_FIGURES_INITIAL_POSITIONS[figureType].forEach(cellName => this.initFigure(cellName, 'black', figureType));
        })
        Object.keys(WHITE_FIGURES_INITIAL_POSITIONS).forEach((figureType: FigureType) => {
            WHITE_FIGURES_INITIAL_POSITIONS[figureType].forEach(cellName => this.initFigure(cellName, 'white', figureType));
        })
    }

    private createBoard() {
        const board = createBoard();
        this.draw(board);

        for(let [x, column ] of rows.entries()) {
            for(let [z, row] of columns.entries()) {
                const cell = new BoardCell(`${row}`,`${column}`, {x, z});
                cellRepository.addCell(cell)
                this.draw(cell);
            }
        }
    }
}

export const sceneAdater = new SceneAdapter();