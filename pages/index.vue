<template>
	<div class="w-full flex justify-center">
		<Login />
	</div>
</template>

<script setup>
	//get a user object from supabase
	const user = useSupabaseUser();

	//on the page mounted, watch the user value
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
