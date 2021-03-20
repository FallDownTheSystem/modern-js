<template>
	<div class="flex space-x-8 bg-purple-300">
		<Sections :children="children" />
	</div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	children: Array
});

</script>

<style scoped>
</style>
