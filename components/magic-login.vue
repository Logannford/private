<template>
	<form class="" @submit.prevent="handleLogin">
		<div class="flex flex-col gap-y-10">
			<div>
				<input 
					class="bg-gray-900 w-full rounded-md px-4 py-2" 
					type="email" 
					placeholder="Your email" 
					v-model="email" 
				/>
			</div>
			<div class="w-full">
				<input
					type="submit"
					class="
						border border-black bg-white text-black 
						rounded-lg px-4 py-2 w-full hover:cursor-pointer hover:bg-blue-400 duration-300
					"
					:value="loading ? 'Loading' : 'Send magic link'"
					:disabled="loading"
				/>
			</div>
		</div>
	</form>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
	try {
		loading.value = true
		//sign the user in with a OTP which is sent to the email address entered in the input
		const { error } = await supabase.auth.signInWithOtp({ email: email.value });

    if (error) 
		throw error
	alert('Check your email for the login link!')
	} catch (error) {
		alert(error.error_description || error.message)
	} finally {
		loading.value = false
	}
}
</script>