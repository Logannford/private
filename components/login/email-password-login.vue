<template>
	<form @submit.prevent="handleLogin">
		<div class="flex flex-col">
			<h3 class="text-white text-2xl font-thin">
				Log in
			</h3>
			<div class="mt-5">
				<label class="text-white font-light pb-2" for="emailAddress">Email Address</label>
				<input 
					class="input-dark mt-2"
					type="email"
					v-model="email"
					placeholder="hello@test.com"
					name="emailAddress"
				/>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	//setting up da things we needs
	const email = ref("");
	const handleLogin = async () => {

	}
</script>