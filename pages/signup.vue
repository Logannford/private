<template>
	<div>
		<div class="hidden md:block">
			<div class="">
				<div class="flex text-white">
					<div class="bg-dark-black w-7/12 mr-20 flex flex-col gap-y-4 justify-start container self-center">
						<h1 class="text-white font-light text-4xl lg:text-5xl">
							Welcome!
						</h1>
						<div class="">
							<span>
								By creating an account you are agreeing to the
								<NuxtLink>
									<p class="text-blue-500 hover:opacity-70 duration-300 hover:cursor-pointer">
										terms and conditions.
									</p>
								</NuxtLink>
							</span>
						</div>
						<NuxtLink class="mt-1" to="/login" >
							<span class="hover:cursor-pointer flex gap-x-2 items-center font-thin">
								Already have an account?
								<p class="text-blue-500 hover:text-blue-900 duration-300">
									Log in
								</p>
							</span>
						</NuxtLink>
						<ClientOnly>
							<ThreeJs/>
						</ClientOnly>
					</div>
					<div class="container w-5/12 h-screen bg-black flex items-center justify-end border-l border-gray-600">
						<div class="w-full flex flex-col gap-y-7">
							<h3 class="text-white text-3xl font-thin mb-2">
								Sign Up
							</h3>
							<!-- alt methods of logging in -->
							<div>
								<div class="flex flex-col gap-y-6 w-full">
									<div class="bg-light-grey">
										<button 
											@click="setLoginMethod('EmailPassword')"
											class="
												text-white bg-black border-4 border-white
												w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
												hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center
												gap-x-3
											"		
											v-if="signUpMethod != 'EmailPassword'"
										>
											<div class="flex justify-between items-center">
												<span class="text-xl">
													Email + Password
												</span>
											</div>
										</button>
									</div>
									<div class="bg-light-grey">
										<button 
											@click="setLoginMethod('Google')"
											class="
												text-white bg-black border-4 border-white
												w-full p-3 md:px-6 md:py-4 duration-300 translate-x-1 -translate-y-1
												hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center
												gap-x-3
											"
											v-if="signUpMethod != 'Google'"
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
									</div>
									<div class="relative flex flex-col justify-center w-full">
										<CssTextLine text="Or" />
									</div>
								</div>
							</div>
							<div class="h-full flex flex-col">
								<div v-show="signUpMethod == 'EmailPassword'">
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
	//layouts
	const EmailPassword = "email-password-signup";
	const signUpMethod = ref('EmailPassword');

	//methods
	function setLoginMethod(method: string) {
		signUpMethod.value = method;
	}

	//composables
	//this is rendered on the server so is NOT reactive, use 'useHead' for that.
	useSeoMeta({
		title: "Sign up • Addressable",
		ogTitle: "Sign up • Addressable",
		description: "Sign up to progress!",
		ogDescription: "Sign up to progress!"
	})
</script>
