<template>
	<div>
		<h2 class="w-full text-center leading-[0.1em] mt-2.5 mb-5 mx-0 border-b-white border-b border-solid">
			<span class="bg-gray-950 px-4 py-2">
				{{ text }}
			</span>
		</h2>
	</div>
</template>

<script setup lang="ts">
	import { defineProps } from 'vue';

	defineProps({
		text: {
			type: String,
			default: "text"
		}
	})
</script>