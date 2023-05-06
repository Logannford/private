<template>
	<button
		@click="logMessage()"
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