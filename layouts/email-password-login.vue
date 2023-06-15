<template>
	<form @submit.prevent="handleLogin">
		<div class="flex flex-col gap-y-6">
			<div class="relative">
				<input 
					class="input-dark !bg-transparent peer placeholder-transparent"
					type="email"
					v-model="email"
					placeholder="hello@example.com"
					name="emailAddress"
					autocomplete="on"
					:class="{
						'outline outline-red-500': errorOccurred
					}"
				/>
				<label 
					class="floating-label" 
					for="emailAddress"
				>
					Email
				</label>
			</div>
			<div class="relative">
				<input 
					class="input-dark !bg-transparent peer placeholder-transparent"
					type="password"
					v-model="password"
					placeholder="password"
					name="password"
					autocomplete="on"
					:class="{
						'outline outline-red-500': errorOccurred
					}"
				/>
				<label 
					class="floating-label" 
					for="password"
				>
					Password
				</label>
			</div>
			<div class="flex items-center mt-4">
				<button 
					class="bg-transparent rounded-lg w-5 h-5 border border-white"
					@click="rememberMe = true"
					:class="{
						'bg-blue-600' : rememberMe	
					}"
				>
				</button>
				<label class="ml-2" for="rememberMe">Remember me</label>
			</div>
			<div class="mt-6 w-full">
				<div class="bg-light-grey">
					<button
						class="
							text-white bg-black border-4 border-white
							w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
							hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer
						"
						ref="button"
						type="submit"
					>
						<div 
							v-if="loading"
							class="text-white w-5 h-5 w-full flex justify-center"
						>
							<Spinner />
						</div>
						<!-- the text is passed in as a prop when we use the button site wide -->
						<span v-if="!loading" class="font-semibold">
							Log in
						</span>
					</button>
				</div>
			</div>
			<div v-if="errorOccurred" class="flex justify-center w-full mt-2 text-red-500">
				{{ errorMessage ? errorMessage : "An error occurred" }}
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	//supabaseeee
	const supabase = useSupabaseClient();
	//setting up da things we needs
	const email = ref("");
	const password = ref("");
	const rememberMe = false;
	//setting up the router
	const router = useRouter();

	//now lets get the data from the user
	const { data: { user } } = await supabase.auth.getUser()

	onMounted(() => {
		//console.log(user);
	});

	//loading state for loading spinner
	const loading = ref(false);

	//data for the login error
	let errorOccurred = ref(false);
	let errorMessage: string = "";

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
				navigateTo("/");
		}
		catch(error: string | any){
			errorOccurred.value = true;
			errorMessage = error.error_description || error.message;
		}
		finally{
			if(user && user.aud == "authenticated")
				router.push("/");
			loading.value = false;
		}
	}	
</script>