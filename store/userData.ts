import { defineStore } from "pinia";

export const userDataStore = defineStore("user-data", {
	state: () => ({
		userEmailAddress: <string>"",
		userDisplayName: <string>"",
	}),

	getters: {
		getData(state){
			return this.userDisplayName;
		}
	},

	actions: {
		
	}
})