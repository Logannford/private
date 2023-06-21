<template>
	<div v-if="!user" class="w-full h-screen flex flex-col justify-center items-center">
		<div class="w-10 h-10 text-white">
			<Spinner />
		</div>
		<div class="mt-2 text-white font-thin">
			Loading
		</div>
	</div>
	<Nav />
	<div class="py-20">
		<sliceZone 
			wrapper="div" 
			:components="components" 
			:slices="[homepage.data.slices[0]]" 
		/>
		<!-- <PrismicRichText :field="homepage.data.slices[0].primary.homepage_banner" /> -->
	</div>
</template>

<script setup>
	import { components } from "@/slices";
	const { client } = usePrismic();
	const { data: homepage } = await useAsyncData(() => 
		client.getSingle("homepage")
	);

	const supabase = useSupabaseClient();

	//get a user object from supabase
	//now lets get the data from the user
	const { data: { user } } = await supabase.auth.getUser()

	//on the page mounted, watch the user value
	onMounted(() => {
		//console.log(user);
		watchEffect(() => {
			if(!user || user.aud != "authenticated")
				navigateTo("/login");
		});
		console.log(homepage.value.data.slices);
	})
	definePageMeta({
		middleware: ["auth"]
	})

	//stuffs for SEO
	useSeoMeta({
		title: "Addressable • Home",
		ogTitle: "Addressable • Home"
	})
</script>
