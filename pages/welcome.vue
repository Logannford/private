<template>
	<div class="flex flex-col gap-y-10 container">
		<h1 class="text-white font-light text-4xl lg:text-5xl">
			Welcome Back!
		</h1>
		<div class="flex gap-x-4">
			<NuxtLink to="/login">
				<ButtonsLightButton text="Login" />
			</NuxtLink>
			<NuxtLink to="/signup">
				<ButtonsLightButton text="Sign up" />
			</NuxtLink>
		</div>

	</div>
</template>

<script setup>
	const user = useSupabaseUser();
</script>