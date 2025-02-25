import { Object3D } from "three";
import { scene } from "../infra/Scene";

export class SceneAdapter {
    #scene = scene

    draw(obj: Object3D) {
        this.#scene.addObject(obj);
    }

    animate() {
        this.#scene.animate();
    }

    remove(obj: Object3D) {
        this.#scene.remove(obj);
    }
}