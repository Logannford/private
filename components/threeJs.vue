<template>
	<div>
		<canvas ref="animation" />
	</div>
</template>
<script setup lang="ts">
	import { Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshBasicMaterial, WebGLRenderer } from 'three'
	import { Ref } from 'vue'
	import { useWindowSize } from '@vueuse/core'

	//creating the renderer
	let renderer: WebGLRenderer
	const animation: Ref<HTMLCanvasElement | null> = ref(null)

	//setting the size of the window
	const { width, height } = useWindowSize()
	const aspectRatio = computed(() => width.value / height.value)

	const scene = new Scene()

	const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
	camera.position.set(0, 0, 4)

	scene.add(camera)

	const cube = new Mesh(
		new BoxGeometry(1, 1, 1, 32, 32),
		new MeshBasicMaterial({ color: 0x008080})
	)

	scene.add(cube)

	function updateCamera() {
		camera.aspect = aspectRatio.value
		camera.updateProjectionMatrix()
	}

	function updateRenderer() {
		renderer.setSize(width.value, height.value)
		renderer.render(scene, camera)
	}

	function setRenderer() {
		if (animation.value) {
			renderer = new WebGLRenderer({ canvas: animation.value })
			renderer.setClearColor( 0xffffff, 0);
			updateRenderer()
		}
	}

	watch(aspectRatio, () => {
		updateCamera()
		updateRenderer()
	})

	onMounted(() => {
		setRenderer()
		loop()
	})

	const loop = () => {
		updateRenderer()
		requestAnimationFrame(loop)
	}
</script>
