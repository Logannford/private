import { defineStore } from "pinia";

export const onboardingProgress = defineStore("onboarding-progress", () => {

	//data properties
	const number = ref<number>(2);

	//getters
	const increment = computed({
		get: () => number.value,
		set: (newValue: number) => {
			number.value = newValue
		}
	})

	//actions

	return { number, increment }
})