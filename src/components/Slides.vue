<template>
	<div>
		<slot></slot>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

ref: slideIndex = 0;

let slides = [];

onMounted(() => {
	slides = [...document.getElementsByClassName('slide')];
	for (const slide of slides) {
		slide.style.backgroundColor = 'red';
	}
})

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
