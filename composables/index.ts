import { ref, computed } from 'vue';
/*
	methods to keep track of a users current progress 
	in the onboarding phase on sign up.
*/

//method for getting the currentSlide
export const currentSlide = () => useState<string>("screen-one", () => "");