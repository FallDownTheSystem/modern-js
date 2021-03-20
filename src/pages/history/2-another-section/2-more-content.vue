<template>
	<div class="flex space-x-8 bg-purple-300">
		<Sections class="border border-black border-dashed" :children="children" />
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
