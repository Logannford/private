<template>
	<div class="border-t border-light-black min-h-[100px]">
		<div class="container py-16 text-white">
			<div class="flex gap-x-48">
				<div class="flex flex-col gap-y-2">
					<PrismicRichText
						:field="siteSettings.results[0].data.company_name"
						class="text-xl"
					/>
					<PrismicRichText  
						:field="siteSettings.results[0].data.company_email_address"
						class="text-sm text-light-grey"
					/>
					<div class="mt-7 flex gap-x-4 text-light-grey">
						<PrismicLink 
							:field="siteSettings.results[0].data.company_instagram"
						>
							<div class="w-5 h-5">
								<IconsInstagram />
							</div>
						</PrismicLink>
						<PrismicLink
							:field="siteSettings.results[0].data.company_linkedin"
						>
							<div class="w-5 h-5">
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
								class="text-light-grey text-sm hover:cursor-pointer hover:text-white duration-300"
							>
								{{ footerMenu.footer_menu_first_text[0]?.text ?? "" }}
							</PrismicLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
	onMounted(() => {
		console.log(siteSettings.value.results[0].data.company_instagram)
		console.log(footer.value.results[0].data);
	})
</script>