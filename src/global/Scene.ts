import {
    PerspectiveCamera,
    Scene as ThreeScene,
    WebGLRenderer, 
    AxesHelper,
    AmbientLight,
    DirectionalLight,
    BasicShadowMap,
    CameraHelper,
    Raycaster,
    Vector2,
    Vector3,
} from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


class Scene {
    scene;
    camera;
    renderer;
    controls: any;
    raycaster: any;
    selectedFigure: any;

    constructor() {
        this.scene = new ThreeScene();
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 15;
        this.renderer = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        
        this.setup();
        this.animate();
    }

    setup() {
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        const axesHelper = new AxesHelper(15);
        this.scene.add(axesHelper);
        
        const light = new AmbientLight( 0x404040 );
        this.scene.add( light );

        const directionalLight = new DirectionalLight('white', 2);
        directionalLight.castShadow = true;
        directionalLight.position.set(15, 15, 15);
        this.scene.add(directionalLight);

        const directionalLight2 = new DirectionalLight('white', 3);
        directionalLight2.castShadow = true;
        directionalLight2.position.set(11, 12, 10);
        this.scene.add(directionalLight2);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = BasicShadowMap;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.shadowMap.enabled = true
        this.renderer.render(this.scene, this.camera);

        const helper = new CameraHelper(directionalLight.shadow.camera);
        this.scene.add( helper )

        const helper2 = new CameraHelper(directionalLight2.shadow.camera);
        this.scene.add( helper2 )
       
		this.raycaster = new Raycaster();
	    let mouse = new Vector2();

		this.renderer.domElement.addEventListener( 'click', raycast.bind(this), false );

		function raycast (event: any) {
            console.log(123);
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			this.raycaster.setFromCamera(mouse, this.camera);

            const intersects = this.raycaster.intersectObjects(this.scene.children);
            const intersect = intersects.length && intersects[0];

            console.log(intersect);
            if(intersect && intersect.object.parent && intersect.object.parent.name !== '') {
                console.log(intersect.object.parent);
                this.selectedFigure = intersect.object.parent;
                intersect.object.parent.children.map((child: any) => {
                    child.material.color.setHex(0xff0000)
                })
            } else if(this.selectedFigure) {
                this.selectedFigure.children.map((child: any) => {
                    child.material.color.setHex(0x555)
                })
                this.selectedFigure = null;
            }
		}
    }

    addObj(obj: any) {   
        this.scene.add(obj.mesh);
        this.update();
    }

    update() {
        this.renderer.render( this.scene, this.camera );
        this.controls.update();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.update()
    }
}

export default Scene;