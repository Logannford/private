<template>
	<div class="text-white flex gap-x-4">
		<button v-if="store.slideIndex != 0" @click="store.goToPreviousSlide()">
			previous
		</button>
		<button v-if="store.slideIndex != store.currentSlideArray.length - 1" @click="store.goToNextSlide()">
			next
		</button>
		<!-- Dynamic layout component -->
		<NuxtLayout :name="currentLayout()">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onMounted, watch } from 'vue';
	import { onboardingProgress } from '~/store/index';

	//getting the layouts
	const screenOne = "screen-one"
	const screenTwo = "screen-two"
	const screenThree = "screen-three"
	const screenFour = "screen-four"

	//creating a store instance
	const store = onboardingProgress();
	
	//lifecycle hooks
	onMounted(() => {
		//onMounted set the current slide to the first one
		store.onPageLoad();
	})

	//layout methods
	const layoutMapping: { [key: string]: string } = {
		"uid-one"		: screenOne,
		"uid-two"		: screenTwo,
		"uid-three"		: screenThree,
		"uid-four"		: screenFour
	};

	const currentLayout = () => {
		return layoutMapping[store.currentSlide];
	};

	//stuffs for SEO
	useSeoMeta({
		title: "On boarding",
		ogTitle: "On boarding"
	})
</script>