<template>
	<div class="flex flex-col md:flex-row text-white h-screen">
		<!-- left side -->
		<div class="w-full md:w-7/12 flex items-center justify-center container">
			<div class="text-white flex flex-col gap-x-4 w-full container">
				<div class="min-w-xl px-10 py-4">
					<!-- Dynamic layout component -->
					<NuxtLayout :name="currentLayout()">
						<NuxtPage />
					</NuxtLayout>
					<div class="flex justify-between mt-3">
						<button 
							:disabled="store.slideIndex == 0" 
							@click="store.goToPreviousSlide()"
							class="disabled:opacity-50"
						>
							previous
						</button>
						<button 
							v-if="store.slideIndex != store.currentSlideArray.length - 1" 
							@click="store.goToNextSlide()"
						>
							next
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- right side -->
		<div class="w-full md:w-5/12 md:bg-light-black md:border-l md:border-gray-600">
			<div class="container py-16 flex flex-col gap-y-20">
				<div class="text-lg">
					LOGO HERE
				</div>
				<div>
					{{ userData.userDisplayName }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onboardingProgress } from '~/store/index';
	import { userDataStore } from "@/store/userData";

	//getting the layouts
	const screenOne = "screen-one"
	const screenTwo = "screen-two"
	const screenThree = "screen-three"
	const screenFour = "screen-four"

	//creating a store instance
	const store = onboardingProgress();
	const userData = userDataStore();
	
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
		return layoutMapping[store.currentSlide] as string;
	};

	//stuffs for SEO
	useSeoMeta({
		title: "On boarding",
		ogTitle: "On boarding"
	})
</script>