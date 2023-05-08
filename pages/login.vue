<template>
	<form class="px-10" @submit.prevent="handleLogin">
		<div 
			class="
				h-full w-full bg-gray-900 rounded-md 
				bg-clip-padding backdrop-filter 
				backdrop-blur-sm bg-opacity-40 border border-black
				px-6 py-3 flex flex-col gap-y-4
				"
			>
			<p class="text-white text-center font-bold text-xl font-thin">Log in via magic link with your email below</p>
			<div>
				<input 
					class="bg-transparent border-b border-black px-4 py-2" 
					type="email" 
					placeholder="Your email" 
					v-model="email" 
				/>
			</div>
			<div v-if="emailError" class="">
				error
			</div>
			<div class="w-full">
				<input
					type="submit"
					class="border border-black rounded-lg px-4 py-2 w-full"
					:value="loading ? 'Loading' : 'Send magic link'"
					:disabled="loading"
				/>
			</div>
		</div>
	</form>
</template>

<script setup>
import { error } from 'console'

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');
const emailError = ref(false);

const handleLogin = async () => {
	email: email.value;
	try {
		if(!email)
			emailError = true;
		loading.value = true
	//sign the user in with a OTP which is sent to the email address entered in the input
	const { error } = await supabase.auth.signInWithOtp({ email });

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