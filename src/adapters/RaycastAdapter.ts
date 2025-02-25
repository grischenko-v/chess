import { PerspectiveCamera, Raycaster, Renderer, Vector2, Scene as ThreeScene, Intersection, } from "three";
import { eventBus } from "../infra/EventBus";
import { IScene, scene } from "../infra/Scene";
import { isBoardCell } from "../utils/isBoardCell";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";

export class RaycastAdapter {
    #renderer: Renderer;
    #raycaster = new Raycaster();
    #camera: PerspectiveCamera;
    #mouseCoordVector = new Vector2()
    #globalScene: IScene;
    
    constructor() {
        this.#globalScene = scene;
        this.#renderer = scene.getRenderer();
        this.#camera = scene.getCamera();

        this.initListener()
    }

    private initListener() {
        this.#renderer.domElement.addEventListener('click', this.raycast.bind(this), false);
    }

    private raycast(event: any) {
        this.#mouseCoordVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.#mouseCoordVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.#raycaster.setFromCamera(this.#mouseCoordVector, this.#camera);
        
        const intersects = this.#raycaster.intersectObjects(this.#globalScene.getScene().children);
        const intersect = intersects.length && intersects[0];

        let intercectType = '';
        let intercectName = '';

        if(intersect && intersect.object) {
            intercectName = intersect.object.parent.name || intersect.object.name;
            intercectType = isBoardCell(intercectName) ? 'cell' : 'figure';
        }

        switch(intercectType) {
            case 'cell': {
                const cell = cellRepository.getCell(intercectName);
                eventBus.dispatchEvent('cellClick', {
                    cell
                });
                return;
            };
            case 'figure': {
                const figure = figureRepository.getFigure(intercectName);
                eventBus.dispatchEvent('figureClick', {
                    figure
                });
                return
            };
            default: {
                eventBus.dispatchEvent('outBoardClick', {});
            };
        }
    }
}