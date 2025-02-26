import { PerspectiveCamera, Raycaster, Renderer, Vector2, Scene as ThreeScene, Intersection, } from "three";
import { eventBus } from "../infra/EventBus";
import { IScene, scene } from "../infra/Scene";
import { isBoardCell } from "../utils/isBoardCell";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";

const dispatchEventStrategy = {
    '': (intercectName: string) => eventBus.dispatchEvent('outsideClick', {}),
    'figure': (intercectName: string) => {
        const figure = figureRepository.getFigure(intercectName);
        console.log(figure);
        eventBus.dispatchEvent('figureClick', { figure });
    },
    'cell': (intercectName: string) => {
        const cell = cellRepository.getCell(intercectName);
        eventBus.dispatchEvent('cellClick', { cell });
    },
}

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

    getIntercectType = (intercectName: string): 'cell' | 'figure' | '' => {
        if(isBoardCell(intercectName)) {
            return'cell';
        }
        if(intercectName) {
            return 'figure';
        }
        return '';
    }

    getIntercectName = (intercect: Intersection) => {
        if(intercect && intercect.object) {
            return intercect.object.parent.name || intercect.object.name;
        }
        return '';
    }

    private raycast(event: any) {
        this.#mouseCoordVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.#mouseCoordVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.#raycaster.setFromCamera(this.#mouseCoordVector, this.#camera);
        
        const intersects = this.#raycaster.intersectObjects(this.#globalScene.getScene().children);
        const intersect = intersects.length && intersects[0];

        const intercectName = this.getIntercectName(intersect);
        const intercectType = this.getIntercectType(intercectName);

        dispatchEventStrategy[intercectType](intercectName);
    }
}