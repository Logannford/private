<template>
	<div>
		<div class="hidden md:block">
			<div class="container flex flex-col justify-center h-screen">
				<div class="flex w-full h-[40vh] items-center container gap-x-5">
					<div class="w-full flex justify-center">
						<div class="flex flex-col gap-y-4 text-center items-center">
							<h1 class="text-white font-light text-title">
								Welcome Back!
							</h1>
							<span class="text-lg text-gray-300 font-thin w-3/4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor facilisis maximus. Nulla vel iaculis ante, ac pretium lacus. Integer.
							</span>
						</div>
					</div>
				</div>
				<div class="w-full h-[45vh] flex justify-between text-white gap-x-10">
					<div class="w-1/2">
						<div class="w-3/4 flex flex-col gap-y-6">
							<button 
								@click="setLoginMethod('EmailPassword')"
								class="bg-gray-900 text-start px-5 py-4 text-white hover:bg-blue-900 duration-300 rounded-md"		
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
						</div>
					</div>
					<div class="w-1/2 flex justify-end">
						<div class="w-3/4">
							<Transition>
								<div v-show="loginMethod == 'MagicLink'">
									<MagicLogin />
								</div>
							</Transition>
						</div>
					</div>
				</div>
				<div class="w-full h-[20vh] flex justify-center text-white mt-5">
					<NuxtLink to="">
						<span class="hover:cursor-pointer">
							Forgot Password?
						</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const loginMethod = ref('MagicLink');

	function setLoginMethod(method: string) {
		loginMethod.value = method;
	}
</script>
