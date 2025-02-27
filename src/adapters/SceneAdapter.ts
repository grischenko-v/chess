import { scene } from "../infra/Scene";
import { Figure } from "../domain/Figure";
import { CellGeometry } from "../ui/board/CellGeometry";
import { FigureUI } from "../ui/figures/FiguresFactory";
import { Object3D } from "three";

interface ISceenObject {
    getMesh: () => Object3D;
}

export class SceneAdapter {
    #scene = scene

    draw(sceenObject: ISceenObject) {
        this.#scene.addObject(sceenObject.getMesh());
    }

    animate() {
        this.#scene.animate();
    }

    remove(deletedFigure: ISceenObject) {
        this.#scene.remove(deletedFigure.getMesh());
    }
}