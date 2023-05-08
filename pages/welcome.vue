<template>
	<div class="flex flex-col gap-y-10">
		<h1>
			Welcome
		</h1>
		<div class="flex gap-x-4">
			<NuxtLink to="/login">
				<ButtonsLightButton text="Login" />
			</NuxtLink>
			<ButtonsLightButton text="Sign up" />
		</div>

	</div>
</template>

<script setup>
	const user = useSupabaseUser();
</script>