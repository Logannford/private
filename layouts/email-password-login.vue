<template>
	<form @submit.prevent="handleLogin">
		<div class="flex flex-col">
			<div>
				<label class="text-white font-light pb-2" for="emailAddress">Email</label>
				<input 
					class="input-dark mt-2"
					type="email"
					v-model="email"
					placeholder="hello@example.com"
					name="emailAddress"
					autocomplete="on"
				/>
			</div>
			<div class="mt-4">
				<label class="text-white font-light pb-2" for="password">Password</label>
				<input 
					class="input-dark mt-2"
					type="password"
					v-model="password"
					placeholder="••••••••"
					name="password"
					autocomplete="on"
				/>
			</div>
			<div class="flex items-center mt-4">
				<button 
					class="bg-transparent rounded-full w-5 h-5 border border-gray-400"
					@click="rememberMe = true"
					:class="{
						'bg-blue-600' : rememberMe	
					}"
				>
				</button>
				<label class="ml-2" for="rememberMe">Remember me</label>
			</div>
			<div class="mt-8 w-full">
				<ButtonsLightButton :buttonClick="handleLogin" text="Log in" />
			</div>
		</div>
	</form>
</template>

<script setup>
	const supabase = useSupabaseClient();
	//setting up da things we needs
	const email = ref("");
	const password = ref("");
	const rememberMe = false;
	//setting up the router
	const router = useRouter();

	const loading = ref(false);

	//method to handle the login
	const handleLogin = async () => {
		try {
			//start that loading spinner!
			loading.value = true;
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email.value,
				password: password.value
			});
			if(error)
				throw error;
			else
				router.push("/");
		}
		catch(error){
			alert(error.error_description || error.message)
		}
		finally{
			alert("Welcome back!");
			loading.value = false;
		}
	}	
</script>