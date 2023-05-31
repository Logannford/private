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
	const supabase = useSupabaseClient();

	//get a user object from supabase
	//now lets get the data from the user
	const { data: { user } } = await supabase.auth.getUser()

	//on the page mounted, watch the user value
	onMounted(() => {
		console.log(user);
		watchEffect(() => {
			if(!user || user.aud != "authenticated")
				navigateTo("/login");
		})
	})
	definePageMeta({
		middleware: ["auth"]
	})
</script>
