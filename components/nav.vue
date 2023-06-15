<template>
	<nav 
		class="
			sticky top-0 w-full
		"
		:class="{
			'shadow-sm shadow-gray-950': isScrolled,
		}"
	>
		<div class="flex items-center justify-between text-white py-7 container">
			<div class="">	
				<IconsSiteLogo />
			</div>
			<!-- main nav area -->
			<div class="flex gap-x-12 text-lg">
				<NuxtLink 
					to="" 
					class="hover:cursor-pointer"
				>
					Getting started
				</NuxtLink>
				<NuxtLink 
					to="" 
					class="hover:cursor-pointer"
				>
					How it works
				</NuxtLink>
				<NuxtLink 
					to="" 
					class="hover:cursor-pointer"
				>
					FAQS
				</NuxtLink>
				<NuxtLink 
					to="" 
					class="hover:cursor-pointer"
				>
					Contact Us
				</NuxtLink>
			</div>
			<!-- login / signup -->
			<div class="">
				<div class="bg-light-grey rounded-md">
					<NuxtLink
						:class="buttonClasses"
						to="/login"
					>
						Login
					</NuxtLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">

	//data properties
	const buttonClasses = ref("text-black bg-white border-4 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center");
	const isScrolled = ref(false);

	//methods
	const pageScrolled = () => {
		if(window.scrollY > 0)
			isScrolled.value = true;
		else
			isScrolled.value = false;
	}

	//lifecycle hooks
	onMounted(() => {
		window.addEventListener("scroll", pageScrolled);
	})

</script>