<template>
	<div ref="root" class="relative slides">
		<div
			class="absolute right-8 top-4 text-sm text-gray-400"
		>{{ slideIndex + 1 }} / {{ slides.length }}</div>
		<slot></slot>
		<div class="flex justify-between items-center content-center mb-2">
			<button
				type="button"
				@click="back"
				class="p-1 hover:shadow-md transition-shadow duration-50 disabled:shadow-none focus:outline-none focus:ring-2 ring-gray-400 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-gray-300 hover:text-gray-100 disabled:text-gray-500 rounded disabled:"
				:disabled="slideIndex === 0"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button
				type="button"
				class="p-1 hover:shadow-md transition-shadow duration-50 disabled:shadow-none focus:outline-none focus:ring-2 ring-gray-400 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-gray-300 hover:text-gray-100 disabled:text-gray-500 rounded"
				@click="forward"
				:disabled="slideIndex === slides.length - 1"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					class="h-6 w-6"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

ref: slideIndex = 0;

ref: slides = [];

const root = ref(null);

onMounted(() => {
	slides = [...root.value.querySelectorAll('.slide')];
	for (const slide of slides.slice(1)) {
		slide.classList.toggle('!hidden');
	}
})

// const currentComponent = computed(() => childComponents[slideIndex]);

const forward = () => {
	if (slideIndex < slides.length - 1) {
		slides[slideIndex].classList.toggle('!hidden');
		slideIndex++
		slides[slideIndex].classList.toggle('!hidden');
	}
}

const back = () => {
	if (slideIndex > 0) {
		slides[slideIndex].classList.toggle('!hidden');
		slideIndex--
		slides[slideIndex].classList.toggle('!hidden');
	}
}
</script>
