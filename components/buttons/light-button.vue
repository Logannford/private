<template>
	<button
		@click="turnBtnOn()"
		class="bg-blue-600 rounded-xl w-full text-white px-4 py-2 border-2 border-blue-600 hover:bg-transparent duration-300"
		ref="button"
	>
		<div 
			v-if="loading"
			class="text-black w-5 h-5 hover:text-yellow-500"
		>
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