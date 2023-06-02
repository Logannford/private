<template>
	<div class="text-white flex gap-x-4">
		<button @click="store.goToPreviousSlide()">
			previous
		</button>
		<button @click="store.goToNextSlide()">
			next
		</button>
		{{ store.currentSlide }}
	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onMounted, watch } from 'vue';
	import { onboardingProgress } from '~/store/index';

	//creating a store instance
	const store = onboardingProgress();
	
	//composables
	//getting the active slide
	const activeSlide = currentSlide();
	
	//lifecycle hooks
	onMounted(() => {
		//onMounted set the current slide to the first one
		store.onPageLoad();
	})

	//computed


	//stuffs for SEO
	useSeoMeta({
		title: "On boarding",
		ogTitle: "On boarding"
	})
</script>