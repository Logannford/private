<template>
	<div>

	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onMounted } from 'vue';

	//composables
	//getting the active slide
	const activeSlide = currentSlide();
	
	//lifecycle hooks
	onMounted(() => {
		console.log(activeSlide);
	})
</script>