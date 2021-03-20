<template>
	<div class="w-full bg-red-200 bg-opacity-75">
		<Slide :children="children" />
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	children: String
});
</script>

<style scoped>
</style>
