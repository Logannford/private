<template>
	<div>
		<button
			:class="buttonClasses"
		>
			<span>
				{{ loading ? loadingText : text }}
			</span>
		</button>
	</div>
</template>

<script setup lang="ts">

	//data properties
	const button = ref(null);
	const loading = ref(false);

	const buttonClasses = 
		"text-white bg-dark-purple border-2 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold";

	//props
	defineProps({
		text: {
			type: String,
			required: true
		},
		loadingText: {
			type: String,
			required: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	})

	//methods

	const turnBtnOn = () => {
		loading.value = true;

		setTimeout(() => {
			loading.value = false;
		}, 2000);
	}
</script>