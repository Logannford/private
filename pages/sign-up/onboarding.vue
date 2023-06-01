<template>
	<div>
		<button @click="() => store.increment++">
			click me
		</button>
	</div>
</template>

<script setup lang="ts">
	//imports 
	import { onMounted, watch } from 'vue';
	import { onboardingProgress } from '~/store/index';
	import { storeToRefs } from 'pinia'

	//store
	const store = onboardingProgress();
	const { number } = storeToRefs(store);

	//composables
	//getting the active slide
	const activeSlide = currentSlide();
	
	//lifecycle hooks
	onMounted(() => {
		console.log(number.value);
	})
	//watchers
	watch(number, (newNumber) => {
		console.log(newNumber);
	})
</script>