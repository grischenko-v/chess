import {
    PerspectiveCamera,
    Scene as ThreeScene,
    WebGLRenderer,
    AxesHelper,
    AmbientLight,
    DirectionalLight,
    BasicShadowMap,
    Raycaster,
    Object3D,
} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Scene {
    #scene: ThreeScene;
    #camera: PerspectiveCamera;
    #renderer: WebGLRenderer;
    controls: any;
    raycaster: Raycaster;

    constructor() {
        this.#scene = new ThreeScene();
        this.#camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.#camera.position.z = 15;
        this.#renderer = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.controls = new OrbitControls(this.#camera, this.#renderer.domElement);

        this.setup();
        this.animate();
    }

    setup() {
        const axesHelper = new AxesHelper(15);
        this.#scene.add(axesHelper);

        this.initLights();
        this.setupRenderer();

        document.body.appendChild(this.#renderer.domElement);
    }

    private initLights() {
        const light = new AmbientLight(0x404040);
        this.#scene.add(light);

        const directionalLight = new DirectionalLight('white', 2);
        directionalLight.castShadow = true;
        directionalLight.position.set(15, 15, 15);
        this.#scene.add(directionalLight);

        const directionalLight2 = new DirectionalLight('white', 3);
        directionalLight2.castShadow = true;
        directionalLight2.position.set(11, 12, 10);
        this.#scene.add(directionalLight2);
    }

    private setupRenderer() {
        this.#renderer.shadowMap.enabled = true;
        this.#renderer.shadowMap.type = BasicShadowMap;
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#renderer.shadowMap.enabled = true
        this.#renderer.render(this.#scene, this.#camera);
    }

    addObj(mesh: Object3D) {
        this.#scene.add(mesh);
        this.update();
    }

    update() {
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
}

export default Scene;