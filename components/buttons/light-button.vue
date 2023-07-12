<template>
	<div :class="button({ intent, size })">
		<slot />
	</div>
</template>

<script setup lang="ts">
	import { cva, type VariantProps } from "class-variance-authority";

	const button = cva("button", {
		variants: {
			intent: {
				primary: "text-white bg-dark-purple border-2 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold",
				secondary: "text-black bg-white border-2 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold"
			},
			size: {
				small: "",
				medium: "",
				large: ""
			}
		},
		compoundVariants: [
			{
				intent: "primary",
				size: "small",
				class: "text-white bg-red-500 border-2 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold"
			}
		]
	})

	type ButtonProps = VariantProps<typeof button>;

	withDefaults(
		defineProps<{ intent: ButtonProps["intent"]; size: ButtonProps["size"]}>(),
		{
			intent: "primary",
			size: "medium"
		}
	)
</script>