<template>
	<div class="text-white flex gap-x-4">
		<button v-if="store.slideIndex != 0" @click="store.goToPreviousSlide()">
			previous
		</button>
		<button v-if="store.slideIndex != store.currentSlideArray.length - 1" @click="store.goToNextSlide()">
			next
		</button>

		<!-- the different layouts imported -->
		<NuxtLayout v-if="store.currentSlide == 'uid-one'" :name="screenOne">
			<NuxtPage />
		</NuxtLayout>
		<NuxtLayout v-if="store.currentSlide == 'uid-two'" :name="screenTwo">
			<NuxtPage />
		</NuxtLayout>
		<NuxtLayout v-if="store.currentSlide == 'uid-three'" :name="screenThree">
			<NuxtPage />
		</NuxtLayout>
		<NuxtLayout v-if="store.currentSlide == 'uid-four'" :name="screenFour">
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