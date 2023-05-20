<template>
	<div>
		<div class="hidden md:block">
			<div class="">
				<div class="flex text-white">
					<div class="bg-dark-black w-7/12 mr-20 flex flex-col gap-y-4 justify-start container self-center">
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
					<div class="container w-5/12 h-screen bg-light-black flex items-center justify-end border-l border-gray-600">
						<div class="w-full flex flex-col gap-y-7">
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
									<div class="relative flex flex-col justify-center w-full">
										<CssTextLine text="Or" />
									</div>
								</div>
							</div>
							<div class="h-full flex flex-col">
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
