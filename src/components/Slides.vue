<template>
	<div class="bg-blue-900">
		I'm a slide component
		<slot></slot>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineProps, computed } from 'vue'

ref: slideIndex = 0;

// const start = computed(() => slideIndex == 0);
// const end = computed(() => slideIndex == childComponents.length - 1);

// const currentComponent = computed(() => childComponents[slideIndex]);

// const forward = () => {
// 	if (slideIndex < childComponents.length - 1) {
// 		slideIndex++
// 	}
// }

// const back = () => {
// 	if (slideIndex > 0) {
// 		slideIndex--
// 	}
// }
</script>
