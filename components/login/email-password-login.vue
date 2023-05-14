<template>
	<form @submit.prevent="handleLogin">
		<div class="flex flex-col">
			<h3 class="text-white text-5xl font-thin">
				Log in
			</h3>
			<div class="mt-16 flex flex-col">
				<div>
					<label class="text-white font-light pb-2" for="emailAddress">Email Address</label>
					<input 
						class="input-dark mt-2"
						type="email"
						v-model="email"
						placeholder="hello@test.com"
						name="emailAddress"
					/>
				</div>
				<div class="mt-8">
					<label class="text-white font-light pb-2" for="password">Password</label>
					<input 
						class="input-dark mt-2"
						type="password"
						v-model="password"
						placeholder="password123"
						name="password"
					/>
				</div>
				<div class="flex items-center mt-4">
					<button 
						class="bg-transparent rounded-full w-5 h-5 border border-gray-400"
						@click="rememberMe = true"
						:class="{
							'bg-blue-600' : rememberMe	
						}"
					>
					</button>
					<label class="ml-2" for="rememberMe">Remember me</label>
				</div>
				<div class="mt-8 w-full">
					<ButtonsLightButton text="Log in" />
				</div>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	//setting up da things we needs
	const email = ref("");
	const password = ref("");
	const rememberMe = false;

	//method to handle the login
	const handleLogin = async () => {

	}
</script>