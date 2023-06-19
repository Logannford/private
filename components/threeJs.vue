<template>
	<div>
		<div ref="container">
			<canvas ref="experience" />
		</div>
	</div>	
</template>

<script setup lang="ts">
	//importing everything from threeJS
	import { 
		Scene, 
		PerspectiveCamera, 
		Mesh, 
		MeshBasicMaterial,
		WebGLRenderer, 
		Color, 
		AmbientLight,
		PlaneGeometry,
		DoubleSide,
		DirectionalLight,
		PCFSoftShadowMap,
		CameraHelper,
		DirectionalLightHelper,
		BoxGeometry,
		MeshPhongMaterial
	} from 'three'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	let renderer: WebGLRenderer;
	let controls: OrbitControls;
	let light = new AmbientLight(0xffffff, 0.7);
	let directionLight = new DirectionalLight(0xffffff, 0.3);
	const container = ref<HTMLDivElement | null>(null);
	const width = container.value?.clientWidth ?? 450;
	const height = container.value?.clientHeight ?? 450;
	const bgColor = new Color("#0A0A0A");

	const experience: Ref<HTMLCanvasElement | null> = ref(null);
	//we need a scene, camera and renderer, so that we can render the scene with the camera
	const scene = new Scene();
	scene.background = bgColor;

	//directional light
	directionLight.position.set(0, 5, 0);
	directionLight.castShadow = true;

	//setting the position of the directionLight
	directionLight.shadow.mapSize.width = 1024;
	directionLight.shadow.mapSize.height = 1024;
	directionLight.shadow.camera.near = 0.1;
	directionLight.shadow.camera.far = 10;
	directionLight.shadow.camera.left = -10;
	directionLight.shadow.camera.right = 10;
	directionLight.shadow.camera.top = 10;
	directionLight.shadow.camera.bottom = -10
	directionLight.shadow.camera;
	/*
		PerspectiveCamera params:
			Field of View
			Aspect ratio
			Near and far clipping plane - objects that are further away from the camera than the value 'far' or closer than 'near' won't be rendered
	*/
	const camera = new PerspectiveCamera(
		75, 
		width / height, 
		0.1, 
		1000
	);
	// Add the perspective camera to the scene
	camera.position.set(0, 0, 0);

	//making the shape with the geometry and material type / color
	let geometry = new BoxGeometry(4, 4, 4)
	console.log(geometry);
	const shape = new Mesh(
		geometry,
		new MeshBasicMaterial({ 
			color: 0x008080
		})
	);

	// Move the shape above the floor by setting its initial position
	shape.position.set(0, 0, 0);
	shape.castShadow = true;

	//setting up the ground - not using plane geometry
	const ground = new Mesh(
		new BoxGeometry(18, 0.5, 18),
		new MeshPhongMaterial({ 
			color: 0xffffff 
		})
	);
	//the ground can receive a
	ground.receiveShadow = true;
	ground.position.y = -5

	//Create a helper for the shadow camera
	const helper = new CameraHelper( directionLight.shadow.camera );
	const lightHelper = new DirectionalLightHelper( directionLight, 5);

	//add everything to the scene
	scene.add(
		light,
		directionLight, 
		shape, 
		ground, 
		//helper, 
		//lightHelper
	);

	//set the camera position
	camera.position.z = 15;

	function setRender(){
		if(experience.value){
			renderer = new WebGLRenderer({ 
				canvas: experience.value, 
				alpha: true ,
				antialias: true
			})
			renderer.shadowMap.enabled = true
			renderer.shadowMap.type = PCFSoftShadowMap;
			
			renderer.setSize(width, height);
			renderer.render(scene, camera)
		}
	}

	const animate = () => {
		requestAnimationFrame(animate);

		shape.rotation.x += 0.01;
		shape.rotation.y += 0.01;

		controls.update();

		renderer.render(scene, camera)
	}

	//lifecycle hooks
	onMounted(() => {
		/*if we have the container then - 
			OrbitControls params:
				camera object
				the element for event listeners 		
					- cannot be the canvas
		*/
		if(container.value)
			controls = new OrbitControls(camera, container.value);
		setRender();
		animate();
	})

</script>