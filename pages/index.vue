<template>
	<div class="w-full h-screen flex flex-col justify-center items-center">
		<div class="w-10 h-10 text-white">
			<Spinner />
		</div>
		<div class="mt-2 text-white font-thin">
			Loading
		</div>
	</div>
</template>

<script setup lang="ts">
	//get a user object from supabase
	const user = useSupabaseUser();

	//on the page mounted, watch the user value
	onMounted(() => {
		watchEffect(() => {
			if(!user.value)
				navigateTo("/login");
		})
	})
	definePageMeta({
		middleware: ["auth"]
	})
</script>
