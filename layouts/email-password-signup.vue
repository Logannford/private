<template>
	<form @submit.prevent="handleSignUp">
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
			<div class="relative">
				<input 
					class="input-dark !bg-transparent peer placeholder-transparent"
					type="password"
					v-model="passwordAuth"
					placeholder="••••••••"
					name="re-enter-password"
					autocomplete="on"
					:class="{
						'outline outline-red-500': errorOccurred
					}"
				/>
				<label 
					class="floating-label" 
					for="re-enter-password"
				>
					Re-enter Password
				</label>
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
				<div class="bg-white">
					<button
						class="
							text-white bg-black border-4 border-white
							w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
							hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer disabled:cursor-not-allowed
						"
						ref="button"
						type="submit"
						:disabled="!passwordMatched"
					>
						<div 
							v-if="loading"
							class="text-white w-5 h-5 w-full flex justify-center"
						>
							<Spinner />
						</div>
						<!-- the text is passed in as a prop when we use the button site wide -->
						<span v-if="!loading">
							Sign up
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
	//storing the users data
	import { userDataStore } from "@/store/userData";
	const userData = userDataStore();
	
	//supabaseeeee
	const supabase = useSupabaseClient();
	//setting up da things we needs
	const email = ref("");
	const password = ref("");
	const passwordAuth = ref("");
	const rememberMe = false;
	//setting up the router
	const router = useRouter();
	let passwordMatched = ref(true);

	//now lets get the data from the user
	const { data: { user } } = await supabase.auth.getUser()

	//on page load check if the user already exits, if they do then redirect to the homepage
	onMounted(() => {
		if(user)
			router.push("/");
	});

	//loading state for loading spinner
	const loading = ref(false);

	//data for the login error
	let errorOccurred = ref(false);
	let errorMessage: string = "";

	watch([password, passwordAuth], ([newPassword, newPasswordAuth]) => {
		passwordMatched.value = newPassword === newPasswordAuth;
	});


	//async function to handle the sign up
	const handleSignUp = async () => {
		try{
			//set loading to true
			loading.value = true;
			//check if the passwords match, if not then throw an error and exit early
			const { data, error } = await supabase.auth.signUp({
				email: email.value,
				password: password.value,
			});
			if(error)
				throw Error;
			else{
				userData.userEmailAddress = email.value;
				navigateTo("/sign-up/onboarding");
			}
		}
		catch(error: string | any){
			errorOccurred.value = true;
			errorMessage = error.error_description || errorMessage;
		}
		finally{
			loading.value = false;
		}
	}

	watchEffect(() => {
		console.log(user);
	})

</script>