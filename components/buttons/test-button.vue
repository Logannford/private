<template class="flex w-full justify-center">
	<button
		@click="logMessage()"
		class="bg-black rounded-xl text-white px-4 py-2"
	>
		{{ text }}
	</button>
</template>
<script setup lang="ts">
	import { defineProps } from 'vue';

	defineProps({
		text: {
			type: String,
			required: true
		}
	})

	const logMessage = () => {
		console.log("hello world");
	}
</script>