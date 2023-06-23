<template>
	<Nav />
	<div class="py-20">
		<sliceZone 
			wrapper="div" 
			:components="components" 
			:slices="[homepage.data.slices[0]]" 
		/>
		<SliceZone
			wrapper="div"
			:components="components"
			:slices="[homepage.data.slices[1]]"
		/>
		<!-- <PrismicRichText :field="homepage.data.slices[0].primary.homepage_banner" /> -->
	</div>
	<!-- footer component -->
	<Footer />
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
	const { data: { user } } = await supabase.auth.getUser();

	const updateUserTable = async () => {
		// Add the user to the "profiles" table in the Supabase database
		let { data } = await supabase
			.from("profiles")
			.insert({
				user_id: user?.id,
				updated_at: new Date(),
				email: user?.email,
			})
	}

	//on the page mounted, watch the user value
	onMounted(() => {
		updateUserTable();
		console.log(homepage.value.data.slices);
	})
	definePageMeta({
		middleware: ["auth"]
	})

	//stuffs for SEO
	useSeoMeta({
		title: "AnonAddress • Home",
		ogTitle: "AnonAddress • Home"
	})
</script>
