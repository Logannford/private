import { defineStore } from "pinia";

export const onboardingProgress = defineStore("onboarding-progress", {
	//state
	state: () => ({
		currentSlideArray: [
			{
				"uid"		: "",
				"screen"	: "screen-one"
			}, 
			{
				"uid"		: "",
				"screen"	: "screen-two"
			},
			{
				"uid"		: "",
				"screen"	: "screen-three"
			},
			{
				"uid"		: "",
				"screen"	: "screen-four"
			}
		] as Array<Object>,
		currentSlide: <any>"",
	}),

	//actions
	actions: {
		onPageLoad(){
			this.currentSlide = this.currentSlideArray[0] ?? null
		}
	}
})
