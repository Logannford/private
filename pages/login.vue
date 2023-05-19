<template>
	<div>
		<div class="hidden md:block">
			<div class="container flex flex-col justify-center h-screen">
				<div class="w-full h-[75vh] flex justify-between text-white gap-x-10">
					<div class="w-1/2 mr-20 flex flex-col gap-y-4 h-full py-10 justify-start">
						<h1 class="text-white font-light text-4xl lg:text-5xl">
							Welcome Back!
						</h1>
						<span class="text-lg text-gray-300 font-thin">
							Choose a method to log into your account.
						</span>
						<NuxtLink class="mt-1" to="/signup" >
							<span class="hover:cursor-pointer flex gap-x-2 items-center font-thin">
								Don't have an account?
								<p class="text-blue-500 hover:text-blue-900 duration-300">
									Sign up
								</p>
							</span>
						</NuxtLink>
						<ClientOnly>
							<ThreeJs/>
						</ClientOnly>
					</div>
					<div class="w-1/2 flex justify-end">
						<div class="w-3/4 flex flex-col gap-y-7">
							<h3 class="text-white text-3xl font-thin mb-2">
								Log in
							</h3>
							<!-- alt methods of logging in -->
							<div>
								<div class="flex flex-col gap-y-6 w-full">
									<button 
										@click="setLoginMethod('EmailPassword')"
										class="button-dark"		
										v-if="loginMethod != 'EmailPassword'"
									>
										<div class="flex justify-between items-center">
											<span class="text-xl">
												Email + Password
											</span>
											<div 
												class="w-4 h-4 rounded-full border border-white"
												:class="{
													'bg-green-500 border !border-green-500' : loginMethod == 'EmailPassword'
												}"
											></div>
										</div>
									</button>
									<button 
										@click="setLoginMethod('MagicLink')"
										class="button-dark"
										v-if="loginMethod != 'MagicLink'"
									>
										<div class="flex justify-between items-center">
											<span class="text-xl">
												Magic Link
											</span>
											<div 
												class="w-4 h-4 rounded-full border border-white"
												:class="
													{'bg-green-500 border !border-green-500' : loginMethod == 'MagicLink'
												}"
											></div>
										</div>
									</button>
									<button 
										@click="setLoginMethod('Google')"
										class="button-dark"
										v-if="loginMethod != 'Google'"
									>
										<div class="flex justify-between items-center">
											<span class="text-xl">
												Google
											</span>
											<div 
												class="w-4 h-4 rounded-full border border-white"
												:class="
													{'bg-green-500 border !border-green-500' : loginMethod == 'Google'
												}"
											></div>
										</div>
									</button>
									<div class="relative flex flex-col justify-center w-full">
										<CssTextLine text="Or" />
									</div>
								</div>
							</div>
							<div class="h-full flex flex-col">
								<div v-show="loginMethod == 'MagicLink'">
									<NuxtLayout :name="magicSignUp">
										<NuxtPage />
									</NuxtLayout>
								</div>
								<div v-if="loginMethod == 'EmailPassword'">
									<NuxtLayout :name="EmailPassword">
										<NuxtPage />
									</NuxtLayout>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	//getting the layouts
	const magicSignUp = "magic-login";
	const EmailPassword = "email-password-login";
	const loginMethod = ref('EmailPassword');

	function setLoginMethod(method: string) {
		console.log(import.meta.env.NUXT_SUPABASE_ANON_KEY)
		loginMethod.value = method;
	}
</script>
