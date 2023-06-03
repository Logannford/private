<template>
	<div>
		<h1 class="text-2xl font-bold">
			Setting up some important details!
		</h1>
		<form @submit.preventDefault(); class="mt-6 flex flex-col gap-y-10">
			<div class="relative mb-2">
				<input 
					name="displayNameInput "
					class="input-dark peer placeholder-transparent"
					v-model="displayName"
					placeholder="Display Name"
					autocomplete="off"
					type="text"
				/>
				<label 
					for="displayNameInput" 
					class="floating-label"
				>
					Display Name
				</label>
				<span class="text-xs font-thin">
					Choose how you'd like other users to find your profile.
				</span>
			</div>
			<div class="">
				<div class="relative">
					<label 
						for="profilePictureUpload" 
						class="
							absolute hover:cursor-pointer text-sm 
							border-b border-onyx-black w-full pb-2
						"
					>
						Upload a profile picture:
					</label>
					<input
						name="profilePictureUpload"
						type="file"
						accept="image"
						class="opacity-0 hover:cursor-pointer"
					/>
				</div>
				<span class="text-xs font-thin">
					Choose how you'd like other users to see your profile.
				</span>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import { userDataStore } from "@/store/userData";

	//data we are getting from this form
	const displayName = ref("");
	const store = storeToRefs(userDataStore())

	//lifecycle hooks
	onMounted(() => {
		console.log(store);
	})

</script>
