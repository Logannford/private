<template>
	<!-- dashboard wrapper -->
	<div 
		class="
			bg-light-black sticky 
			w-full rounded-xl top-0 flex items-center justify-center
		"
		style="transform: skewY(10deg) rotateX(20deg) rotateZ(-20deg);"
		ref="dashboardWrapper"
	>
		<div class="container">
			test
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	const dashboardWrapper = ref<HTMLDivElement | null>(null);

	const dashboardWrapperSwitch = () => {
	const transitionProgress = Math.min(scrollY / 50, 20);

		if (typeof window !== 'undefined') {
			console.log(10 % transitionProgress);
			dashboardWrapper.value?.style.setProperty(
				"transform", 
				`skewY(${transitionProgress}deg) rotateX(${transitionProgress}deg) rotateZ(${transitionProgress}deg)`
			);
		}
	};

	onMounted(() => {
		window.addEventListener("scroll", dashboardWrapperSwitch);
	});

	// Clean up the event listener when the component is unmounted
	onUnmounted(() => {
		window.removeEventListener("scroll", dashboardWrapperSwitch);
	});
</script>
