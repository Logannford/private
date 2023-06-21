<template>
	<div class="border-t border-light-black min-h-[100px]">
		<div class="container py-8">
			<div class="grid grid-cols-4 ">
				<div 
					class="text-white w-full flex justify-center items-center flex-col"
					v-for="(footerChild, index) in footer.results[0].data"
					:key="index"
				>
					<h3>
						{{ footerChild[0].footer_menu_heading[0].text }}
					</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { client } = usePrismic();
	const { data: footer } = await useAsyncData(() => 
		client.getByType("footer")
	);

	onMounted(() => {
		console.log(footer.value.results[0].data);
	})
</script>