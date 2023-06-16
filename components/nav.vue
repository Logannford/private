<template>
	<nav 
		class="
			sticky top-0 w-full
		"
		:class="{
			'shadow-sm shadow-white': isScrolled,
		}"
	>
		<div class="flex items-center justify-between text-white py-5 container">
			<NuxtLink 
				class="w-44 hover:opacity-50 duration-300"
				to="/"
			>	
				<ImagesSiteLogo />
			</NuxtLink>
			<!-- main nav area -->
			<div class="flex space-x-12 items-center">
				<div 
					class="relative group"
					v-for="(item, index) in menuItems"
					:key="index"
					@mouseenter="
						item.hovered.value = true, 
						getActiveLink($event)
					"
					@mouseleave="
						item.hovered.value = false,
						getActiveLink($event)
					"
				>
					<NuxtLink
						:to="item.route"
						class="flex gap-x-2 items-center group hover:cursor-pointer"
						:aria-expanded="item.hovered.value"
					>
						<span
							class="
								group-hover:bg-white group-hover:text-black px-4 py-2 
								rounded-md duration-500 group-hover:font-medium
							"
						>
							{{ item.text }}
						</span>
					</NuxtLink>
					<!-- mega menu dropdown -->
					<div 
						:class="megaMenuChildren"
					>
						<div class="relative p-6 bg-white rounded-md shadow-xl w-full">
							<div 
								class="
									bg-white transform absolute -top-2 rotate-45 translate-x-0
									w-6 h-6 transition-transform group-hover:translate-x-12
									ease-in-out duration-500
								"
							></div>
							<div class="px-3 py-2">
								<span class="text-black">
									test
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- login / signup -->
			<div>
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
	//imports 

	//data properties
	const buttonClasses = 
		ref("text-black bg-white border-4 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-2 hover:-translate-y-2 hover:cursor-pointer flex items-center");
	const megaMenuChildren = 
		ref("top-16 absolute opacity-0 -translate-y-4 invisible ease-in-out duration-300 group-hover:block group-hover:opacity-100 group-hover:translate-y-0 -left-10 group-hover:visible group-hover:transform rounded-md z-50 min-w-[300px]");
	const isScrolled = ref(false);
	const activeLink = ref()

	const menuItems = [
		{
			route: "/login",
			text: "Getting started",
			hovered: ref(false),
			expanded: ref(false)
		},
		{
			route: "",
			text: "How it works",
			hovered: ref(false),
			expanded: ref(false)
		},
		{
			route: "",
			text: "Pricing",
			hovered: ref(false),
			expanded: ref(false)
		},
		{
			route: "",
			text: "Contact us",
			hovered: ref(false),
			expanded: ref(false)
		}
	]

	//methods
	const pageScrolled = () => {
		if(window.scrollY > 0)
			isScrolled.value = true;
		else
			isScrolled.value = false;
	}

	const getActiveLink = (event: any) => {
		activeLink.value = document.querySelector("[aria-expanded='true']");
	}

	watch(activeLink, (newValue) => {
		console.log('activeLink changed:', newValue);
	});

	//lifecycle hooks
	onMounted(() => {
		window.addEventListener("scroll", pageScrolled);
	})

</script>