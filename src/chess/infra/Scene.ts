import {
    PerspectiveCamera,
    Scene as ThreeScene,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
    BasicShadowMap,
    Object3D,
    Fog,
} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap';
export interface IScene {
    addObject: (mesh: Object3D) => void,
    animate: () => void,
    getRenderer: () => WebGLRenderer,
    getCamera: () =>  PerspectiveCamera,
    getScene: () => ThreeScene,
}

const WHITE_CAMERA_POSITION = {
	x: -12,
	y: 12,
	z: 12,
} as const;

const BLACK_CAMERA_POSITION = {
	x: 12,
	y: 12,
	z: 12,
} as const;

class Scene implements IScene{
    #scene: ThreeScene;
    #camera: PerspectiveCamera;
    #renderer: WebGLRenderer;
    controls: OrbitControls;

    constructor() {
        this.#scene = new ThreeScene();
        this.#scene.fog = new Fog( "white", 0, 100 );

        this.#camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.#camera.position.y = WHITE_CAMERA_POSITION.y;
        this.#camera.position.z = WHITE_CAMERA_POSITION.z;
        this.#camera.position.x = WHITE_CAMERA_POSITION.x;
        
        this.#renderer = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        
        this.controls = new OrbitControls(this.#camera, this.#renderer.domElement);
        this.controls.enableZoom = false;

        this.setup();
        this.animate();
    }

	changeCameraPosition(playerColor: 'white' | 'black') {
		if(playerColor === 'white') {
			this.animateCameraPoistion(WHITE_CAMERA_POSITION);
			return;
		}
		this.animateCameraPoistion(BLACK_CAMERA_POSITION);
	}

	private animateCameraPoistion(newPostion: typeof BLACK_CAMERA_POSITION | typeof WHITE_CAMERA_POSITION) {
		gsap.to(this.#camera.position, {
				x: newPostion.x,
				y: newPostion.y,
				z: newPostion.z,
				duration: 2,
				ease: "power1.out",
				onComplete: () => {
					this.#camera.position.y = newPostion.y;
        			this.#camera.position.z = newPostion.z;
 	 			    this.#camera.position.x = newPostion.x;
				}
			});
	}


	private handleResize() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		// this.#camera.aspect = width / height;
		this.#camera.updateProjectionMatrix();
		this.#renderer.setSize(width, height, false);
  	}

    private setup() {
       //axis helperif need
        // const axesHelper = new AxesHelper(15);
        // this.#scene.add(axesHelper);

        this.initLights();
        this.setupRenderer();

        document.body.appendChild(this.#renderer.domElement);
		window.addEventListener('resize', () => this.handleResize());
    }

    private initLights() {
        const light = new AmbientLight(0x404040);
        this.#scene.add(light);

        const directionalLight = new DirectionalLight('white', 2);
        directionalLight.castShadow = true;
        directionalLight.position.set(15, 15, 15);
        this.#scene.add(directionalLight);

        const directionalLight2 = new DirectionalLight('white', 1.5);
        directionalLight2.castShadow = true;
        directionalLight2.position.set(11, 12, 10);
        this.#scene.add(directionalLight2);

        const directionalLight3 = new DirectionalLight('white', 1.3);
        directionalLight3.castShadow = true;
        directionalLight3.position.set(-11, 12, 10);
        this.#scene.add(directionalLight3);
    }

    private setupRenderer() {
        this.#renderer.shadowMap.enabled = true;
        this.#renderer.shadowMap.type = BasicShadowMap;
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#renderer.shadowMap.enabled = true
        this.#renderer.render(this.#scene, this.#camera);
        // this.#renderer.setPixelRatio(window.devicePixelRatio);
    }

    addObject(mesh: Object3D) {
        this.#scene.add(mesh);
        this.update();
    }

    private update() {
        this.#renderer.render(this.#scene, this.#camera);
        this.controls.update();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.update()
    }

    getRenderer() {
        return this.#renderer;
    }

    getCamera() {
        return this.#camera;
    }

    getScene() {
        return this.#scene;
    }

    remove(obj: Object3D) {
        this.#scene.remove(obj);
    }
}

export const scene = new Scene();