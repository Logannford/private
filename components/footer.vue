<template>
	<footer class="min-h-[100px] bg-white/95 rounded-tl-[7rem]">
		<div class="container py-16 text-dark-black">
			<div class="flex gap-x-48">
				<div class="flex flex-col gap-y-2">
					<PrismicRichText
						:field="siteSettings.results[0].data.company_name"
						class="text-xl"
					/>
					<PrismicRichText  
						:field="siteSettings.results[0].data.company_email_address"
						class="text-sm text-dark-black/50"
					/>
					<div class="mt-7 flex gap-x-4 text-dark-black/50">
						<PrismicLink 
							:field="siteSettings.results[0].data.company_instagram"
						>
							<div class="w-5 h-5 hover:text-black duration-300">
								<IconsInstagram />
							</div>
						</PrismicLink>
						<PrismicLink
							:field="siteSettings.results[0].data.company_linkedin"
						>
							<div class="w-5 h-5 hover:text-black duration-300">
								<IconsLinkedin />
							</div>
						</PrismicLink>
					</div>
				</div>
				<div class="grid grid-cols-3 w-full gap-x-4">
					<div 
						class="w-full flex flex-col"
						v-for="(footerChild, index) in footer.results[0].data"
						:key="index"
					>
						<h3 class="font-bold text-lg mb-5">
							{{ footerChild[0]?.footer_menu_heading[0]?.text ?? "" }}
						</h3>
						<!-- footer menu items -->
						<div 
							v-for="(footerMenu, index) in footerChild" 
							:key="index"
							class="mt-3"
						>
							<PrismicLink 
								:field="footerMenu.footer_menu_first_link"
								class="text-dark-black/50 text-sm hover:cursor-pointer hover:text-dark-purple duration-300"
							>
								{{ footerMenu.footer_menu_first_text[0]?.text ?? "" }}
							</PrismicLink>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full container text-dark-black/50">
			<div class="h-px bg-light-black w-full"></div>
			<div class="py-5 flex justify-between">
				<span class="text-xs">
					© AnonAddress 2023 All rights reserved
				</span>
				<div class="flex gap-x-3">
					<NuxtLink to="/privacy-policy">
						<span class="text-xs hover:text-dark-purple duration-300">
							Privacy Policy
						</span>
					</NuxtLink>
					<NuxtLink to="/terms-and-conditions">
						<span class="text-xs hover:text-dark-purple duration-300">
							Terms and Conditions
						</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>

	//data
	const { client } = usePrismic();
	const { data: footer } = await useAsyncData(() => 
		client.getByType("footer")
	);

	const { data: siteSettings } = await useAsyncData(() => 
		client.getByType("site_settings")
	);

	//methods
	
	//lifecycle hooks
	
</script>