<template>
	<div>
		<div class="">
			<div class="">
				<div class="flex flex-col md:flex-row text-white">
					<div class="hidden md:block bg-dark-black w-full md:w-7/12 mr-20 flex flex-col gap-y-4 justify-start container self-center">
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
					<div class="w-full md:w-5/12 h-screen bg-dark-black md:bg-light-black flex md:items-center md:justify-end md:border-l md:border-gray-600">
						<div class="container w-full flex flex-col gap-y-7 mt-12 md:mt-0">
							<h3 class="text-white text-4xl md:text-3xl font-thin mb-2">
								Log in
							</h3>
							<!-- alt methods of logging in -->
							<div class="order-last md:order-first">
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
										</div>
									</button>
									<button 
										@click="setLoginMethod('MagicLink')"
										class="button-dark flex items-center gap-x-3"
										v-if="loginMethod != 'MagicLink'"
									>
										<div class="text-white w-6 h-6">
											<IconsSend />
										</div>
										<div class="flex justify-between items-center">
											<span class="text-xl">
												Magic Link
											</span>
										</div>
									</button>
									<button 
										@click="setLoginMethod('Google')"
										class="button-dark flex items-center gap-x-3"
										v-if="loginMethod != 'Google'"
									>
										<div class="text-white w-6 h-6">
											<IconsGoogle />
										</div>
										<div class="flex justify-between items-center">
											<span class="text-xl">
												Google
											</span>
										</div>
									</button>
									<div class="relative flex flex-col justify-center w-full order-first md:order-last">
										<CssTextLine text="Or" />
									</div>
								</div>
							</div>
							<div class="md:h-full flex flex-col">
								<div v-if="loginMethod == 'MagicLink'">
									<NuxtLayout :name="magicSignUp">
										<NuxtPage />
									</NuxtLayout>
								</div>
								<div v-show="loginMethod == 'EmailPassword'">
									<NuxtLayout :name="EmailPassword">
										<NuxtPage />
									</NuxtLayout>
								</div>
							</div>
							<div class="block md:hidden flex justify-center order-last">
								<NuxtLink to="/signup">	
									<span class="hover:cursor-pointer hover:text-blue-500 duration-300 hover:opacity-70">
										Don't have an account?
									</span>
								</NuxtLink>
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
		loginMethod.value = method;
	}
</script>
