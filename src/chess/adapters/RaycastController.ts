import { PerspectiveCamera, Raycaster, type Renderer, Vector2, type Intersection, } from "three";
import { eventBus, eventTypes } from "../infra/EventBus";
import { type IScene, scene } from "../infra/Scene";
import { cellRepository } from "../repository/CellRepository";
import { figureRepository } from "../repository/FiguresRepository";
import { boardMatrix } from "../constants";

const dispatchEventStrategy = {
    '': (_intercectName: string) => eventBus.dispatchEvent(eventTypes.outsideClick, {}),
    'figure': (intercectName: string) => {
        const figure = figureRepository.getFigure(intercectName);
        eventBus.dispatchEvent(eventTypes.figureClick, { clickedFigure: figure });
    },
    'cell': (intercectName: string) => {
        const cell = cellRepository.getCell(intercectName);
        eventBus.dispatchEvent(eventTypes.cellClick, { clickedCell: cell });
    },
}

export class RaycastController {
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

    private getIntercectType = (intercectName: string): 'cell' | 'figure' | '' => {
        if(this.isBoardCell(intercectName)) {
            return'cell';
        }
        if(intercectName) {
            return 'figure';
        }
        return '';
    }

    private getIntercectName = (intercect?: Intersection) => {
        if(intercect && intercect.object) {
            return intercect.object.parent?.name || intercect.object.name;
        }
        return '';
    }

    private raycast(event: any) {
        this.#mouseCoordVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.#mouseCoordVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.#raycaster.setFromCamera(this.#mouseCoordVector, this.#camera);
        
        const intersects = this.#raycaster.intersectObjects(this.#globalScene.getScene().children);
        const intersect = intersects.length ? intersects[0] : undefined;

        const intercectName = this.getIntercectName(intersect);
        const intercectType = this.getIntercectType(intercectName);

        dispatchEventStrategy[intercectType](intercectName);
    }

	private isBoardCell(name: string) {
		const result = false;
		for(let i = 0; i < boardMatrix.length; i++) {
			for(let j = 0; j< boardMatrix[i].length; j++) {
				if(name === boardMatrix[i][j]) {
					return true;
				}
			}
		}
		return result
	}
}