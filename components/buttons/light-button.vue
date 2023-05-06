<template>
	<button
		@click="turnBtnOn()"
		class="bg-yellow-500 rounded-xl text-black px-4 py-2"
		ref="button"
	>
		<div v-if="loading">
			<Spinner />
		</div>
		<!-- the text is passed in as a prop when we use the button site wide -->
		<span>
			{{ loading ? loadingText : text }}
		</span>
	</button>
</template>

<script setup lang="ts">
	import { defineProps, ref, onMounted } from 'vue';

	const button = ref(null);
	const loading = ref(false);

	//props
	defineProps({
		text: {
			type: String,
			required: true
		},
		loadingText: {
			type: String,
			required: false
		}
	})

	const turnBtnOn = () => {
		loading.value = true;

		setTimeout(() => {
			loading.value = false;
		}, 2000);
	}
</script>