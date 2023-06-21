<template>
	<div class="border-t border-light-black min-h-[100px]">
		<div class="container py-8 text-white">
			<div class="grid grid-cols-5 gap-x-4">
				<div class="border-r border-light-black">
					AnonAddress
				</div>
				<div 
					class="w-full flex justify-center items-center flex-col gap-y-6"
					v-for="(footerChild, index) in footer.results[0].data"
					:key="index"
				>
					<h3 class="font-bold text-lg">
						{{ footerChild[0]?.footer_menu_heading[0]?.text ?? "" }}
					</h3>
					<!-- footer menu items -->
					<div class="">
						<PrismicLink 
							:field="footerChild[0]?.footer_menu_first_link"
							class="text-light-grey text-sm hover:cursor-pointer hover:text-white duration-300"
						>
							{{ footerChild[0]?.footer_menu_first_text[0]?.text ?? "" }}
						</PrismicLink>
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

	//methods
	
	//lifecycle hooks
	onMounted(() => {
		console.log(footer.value.results[0].data);
	})
</script>