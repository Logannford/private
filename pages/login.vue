<template>
	<div>
		<div class="">
			<div class="">
				<div class="flex flex-col md:flex-row text-white">
					<div class="hidden md:block bg-dark-black w-full md:w-7/12 mr-20 flex flex-col gap-y-4 justify-start container self-center">
						<h1 class="text-white font-light text-4xl lg:text-5xl mb-4">
							Welcome Back!
						</h1>
						<span class="mt-3 text-lg text-gray-300 font-thin">
							Choose a method to log into your account.
						</span>
						<NuxtLink class="mt-2" to="/signup" >
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
					<div class="w-full md:w-5/12 h-screen bg-dark-black md:bg-black flex md:items-center md:justify-end md:border-l md:border-gray-600">
						<div class="container w-full flex flex-col gap-y-7 mt-12 md:mt-0">
							<h3 class="text-white text-4xl md:text-3xl font-thin mb-2 text-center md:text-start">
								Log in
							</h3>
							<!-- alt methods of logging in -->
							<div class="order-last md:order-first">
								<div class="flex flex-col gap-y-6 w-full">
									<div class="flex flex-row md:flex-col gap-x-4 md:gap-y-4 justify-center">
										<div class="bg-white">
											<button 
												@click="setLoginMethod('EmailPassword')"
												class="
													text-white bg-black border-4 border-white
													w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
													hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center
													gap-x-3
												"		
												v-if="loginMethod.currentLoginMethod != 'EmailPassword'"
											>
												<div class="flex justify-between items-center">
													<span class="md:text-xl">
														Email + Password
													</span>
												</div>
											</button>
										</div>
										<div class="bg-white">
											<button 
												@click="setLoginMethod('magicSignUp')"
												class="
													text-white bg-black border-4 border-white
													w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
													hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center
													gap-x-3
												"
												v-if="loginMethod.currentLoginMethod != 'magicSignUp'"
											>
												<div class="text-white w-6 h-6">
													<IconsSend />
												</div>
												<div class="hidden md:flex justify-between items-center">
													<span class="md:text-xl">
														Magic Link
													</span>
												</div>
											</button>
										</div>
										<div class="bg-white">
											<button 
												@click="setLoginMethod('Google')"
												class="
													text-white bg-black border-4 border-white
													w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
													hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center
													gap-x-3
												"
												v-if="loginMethod.currentLoginMethod != 'Google'"
											>
												<div class="text-white w-6 h-6">
													<IconsGoogle />
												</div>
												<div class="hidden md:flex justify-between items-center">
													<span class="md:text-xl">
														Google
													</span>
												</div>
											</button>
										</div>
									</div>
									<div class="relative flex flex-col justify-center w-full order-first md:order-last">
										<CssTextLine text="Or" />
									</div>
								</div>
							</div>
							<div class="md:h-full flex flex-col mt-10 md:mt-0">
								<!-- Dynamic layout component -->
								<NuxtLayout :name="currentLoginMethod()">
									<NuxtPage />
								</NuxtLayout>
							</div>
							<div class="md:hidden flex justify-center order-last">
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
	const loginMethod = reactive({ currentLoginMethod: "EmailPassword"});
	

	function setLoginMethod(method: string) {
		loginMethod.currentLoginMethod = method;
	}

	const layoutMapping: { [key: string]: string } = {
		"magicSignUp"				: magicSignUp,
		"EmailPassword"				: EmailPassword
	}

	const currentLoginMethod = () => {
		return layoutMapping[loginMethod.currentLoginMethod] as string
	}

	watch((loginMethod), (val) => {
		console.log(loginMethod.currentLoginMethod)
	})

	//stuffs for SEO
	useSeoMeta({
		title: "Login • SMYW",
		ogTitle: "Login • SMYW"
	})
</script>
