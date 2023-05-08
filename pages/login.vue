<template>
<form class="" @submit.prevent="handleLogin">
	<div class="">
		<h1 class="">Supabase + Nuxt 3</h1>
		<p class="">Sign in via magic link with your email below</p>
		<div>
			<input 
				class="inputField" 
				type="email" 
				placeholder="Your email" 
				v-model="email" 
			/>
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				:value="loading ? 'Loading' : 'Send magic link'"
				:disabled="loading"
			/>
		</div>
	</div>
	</form>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
	try {
		loading.value = true
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