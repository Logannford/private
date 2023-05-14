<template>
	<div>
		<div class="hidden md:block">
			<div class="container flex flex-col justify-center h-screen">
				<div class="w-full h-[75vh] flex justify-between text-white gap-x-10">
					<div class="w-1/2 mr-20 flex flex-col gap-y-4 h-full py-20 justify-start">
						<h1 class="text-white font-light text-4xl lg:text-5xl">
							Welcome Back!
						</h1>
						<span class="text-lg text-gray-300 font-thin">
							Choose a method to log into your account.
						</span>
						<ClientOnly>
							<ThreeJs/>
						</ClientOnly>
					</div>
					<div class="w-1/2 flex justify-end">
						<div class="w-3/4 py-10 flex flex-col gap-y-14">
							<div>
								<Transition name="slide-fade">
									<div v-show="loginMethod == 'MagicLink'">
										<LoginMagicLogin />
									</div>
								</Transition>
								<Transition name="slide-fade">
									<div v-if="loginMethod == 'EmailPassword'">
										<LoginEmailPasswordLogin />
									</div>
								</Transition>
							</div>
							<!-- alt methods of logging in -->
							<div>
								<div class="relative flex flex-col justify-center w-full">
									<CssTextLine text="Or" />
								</div>
								<div class="flex flex-col gap-y-6 w-full mt-8">
									<button 
										@click="setLoginMethod('EmailPassword')"
										class="bg-gray-900 text-start px-5 py-4 text-white hover:bg-blue-900 duration-300 rounded-md"		
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
										class="bg-gray-900 text-start px-5 py-4 text-white hover:bg-blue-900 duration-300 rounded-md"
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
										class="bg-gray-900 text-start px-5 py-4 text-white hover:bg-blue-900 duration-300 rounded-md"
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
	const loginMethod = ref('EmailPassword');

	function setLoginMethod(method: string) {
		loginMethod.value = method;
	}
</script>
