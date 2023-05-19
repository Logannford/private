<template>
	<div class="w-full h-full">
		<div ref="container">
			<canvas ref="animation" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, watch, computed } from 'vue';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { useWindowSize } from '@vueuse/core';

	// Creating the renderer
	let renderer = new THREE.WebGLRenderer();
	const animation = ref<HTMLCanvasElement | null>(null);
	const container = ref<HTMLDivElement | null>(null);
	const width = container.value?.clientWidth ?? 1024;
	const height = container.value?.clientHeight ?? 1024;

	// Setting the size of the window
	const aspectRatio = computed(() => width / height);

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
	camera.position.set(0, 0, 4);

	// Add the perspective camera to the scene
	scene.add(camera);

	// Make the cube
	const cube = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1, 32, 32),
		new THREE.MeshBasicMaterial({ color: 0x008080 })
	);

	// Add the cube to the scene
	scene.add(cube);

	// Making the orbit controls
	let controls: OrbitControls | null = null;

	//updating the camera based on aspect ratio value
	function updateCamera() {
		camera.aspect = aspectRatio.value;
		camera.updateProjectionMatrix();
	}

	function updateRenderer(){
		//Resizes the output canvas to (width, height), and also sets the viewport to fit that size
		renderer.setSize(width.value, height.value);
		renderer.render(scene, camera);
	}

	function setRenderer() {
		if (animation.value) {
		renderer = new THREE.WebGLRenderer({ canvas: animation.value });
		renderer.setClearColor(0xffffff, 0);
		updateRenderer();
		}
	}

	watch(aspectRatio, () => {
		if(controls)
			controls.update();
		updateCamera();
		updateRenderer();
	});

	onMounted(() => {
		if (container.value)
			controls = new OrbitControls(camera, container.value);
		setRenderer();
		loop();
	});

	const loop = () => {
		updateRenderer();
		requestAnimationFrame(loop);
	};
</script>