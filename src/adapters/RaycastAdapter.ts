import { PerspectiveCamera, Raycaster, Renderer, Vector2, Scene as ThreeScene, } from "three";
import Scene from "../domain/Scene";

export class RaycastAdapter {
    #renderer: Renderer;
    #raycaster = new Raycaster();
    #camera: PerspectiveCamera;
    #mouseCoordVector = new Vector2()
    #scene: ThreeScene;
    
    constructor(scene: Scene) {
        this.#scene = scene.getScene();
        this.#renderer = scene.getRenderer();
        this.#camera = scene.getCamera();

        this.initListener()
    }

    private initListener() {
        this.#renderer.domElement.addEventListener('click', this.raycast.bind(this), false);
    }

    private raycast(event: any) {
        console.log('raycast');
        this.#mouseCoordVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.#mouseCoordVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.#raycaster.setFromCamera(this.#mouseCoordVector, this.#camera);
        
        const intersects = this.#raycaster.intersectObjects(this.#scene.children);
        const intersect = intersects.length && intersects[0];
        
        return {intersect}
    }
}