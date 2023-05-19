<template>
	<form class="" @submit.prevent="handleLogin">
		<div class="flex flex-col">
			<h3 class="text-white text-2xl font-thin">
				Login via Magic Link
			</h3>
			<div class="mt-6">
				<input 
					class="input-dark" 
					type="email" 
					placeholder="Your email" 
					v-model="email" 
				/>
			</div>
			<div class="w-full mt-4">
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
		const { error } = await supabase.auth.signInWithOtp({ 
				email: email.value,
				SignInWithPasswordlessCredentials: {
					options: {
						shouldCreateUser: false
					}
				}
			});

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