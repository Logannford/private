<template>
	<div class="w-full flex justify-center">
		<Login />
	</div>
</template>

<script setup>
	const user = useSupabaseUser();

	onMounted(() => {
		watchEffect(() => {
			if(!user.value)
				navigateTo("/welcome");
		})
	})
	definePageMeta({
		middleware: ["auth"]
	})
</script>
