import { findIndex } from "cypress/types/lodash";
import { defineStore } from "pinia";

interface Slide {
	uid: string;
	screen: string;
}	

export const onboardingProgress = defineStore("onboarding-progress", {
	//state
	state: () => ({
		currentSlideArray: [
			{
				"uid"		: "uid-one",
				"screen"	: "screen-one"
			}, 
			{
				"uid"		: "uid-two",
				"screen"	: "screen-two"
			},
			{
				"uid"		: "uid-three",
				"screen"	: "screen-three"
			},
			{
				"uid"		: "uid-four",
				"screen"	: "screen-four"
			}
		] as Slide[],
		currentSlide: "" as string,
		slideIndex: 0 as number,
	}),

	//getters - accessing the state through the parameter
	getters: {
		currentSlideArrayLength(state){
			return this.currentSlideArray.length;
		}
	},

	//actions - changing the state 
	actions: {
		//for setting the state of the current slide
		onPageLoad(){
			this.currentSlide = this.currentSlideArray[0].uid;
			this.slideIndex = this.findIndexSection(this.currentSlide) as number;
		},

		//navigation methods
		findIndexSection(sectionUid: string){
			return this.currentSlideArray.findIndex(
				(slide) => slide.uid == sectionUid
			);
		},

		goToNextSlide(){
			//getting the index of the currentSlide
			this.slideIndex = this.findIndexSection(this.currentSlide) as number;

			//if this check passes, we know we're not at the end of the array
			if((this.slideIndex) + 1 === this.currentSlideArray.length)
				return;

			//set the value of the index we want to move to
			this.$patch((state) => {
				this.slideIndex = (this.slideIndex) + 1;
			});
			//setting the current slide to the index we get above's uid
			this.currentSlide = this.currentSlideArray[this.slideIndex].uid
		},

		goToPreviousSlide(){
			//getting the index of the currentSlide
			this.slideIndex = this.findIndexSection(this.currentSlide) as number;

			//if this check passes, we know we're not at the start of the array
			if((this.slideIndex) == 0)
				return;

			//set the value of the index we want to move to
			this.$patch((state) => {
				this.slideIndex = (this.slideIndex) - 1;
			});

			this.currentSlide = this.currentSlideArray[this.slideIndex].uid
		}
	}
})
