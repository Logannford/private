<template>
	<div class="text-white">
		<button @click="">
			click me
		</button>
		{{ store.currentSlideArray }}
	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onMounted, watch } from 'vue';
	import { onboardingProgress } from '~/store/index';

	//store
	const store = onboardingProgress();

	const props = defineProps({
		currentSlide: String
	})

	//composables
	//getting the active slide
	const activeSlide = currentSlide();
	
	//lifecycle hooks
	onMounted(() => {
		store.onPageLoad();
		console.log(store.currentSlide);
	})
	//watchers
	watch(() => "", () => {
		
	})

	//stuffs for SEO
	useSeoMeta({
		title: "On boarding",
		ogTitle: "On boarding"
	})
</script>