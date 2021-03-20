<template>
	<slot :children="children" :frontmatter="frontmatter"></slot>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	children: Array,
	frontmatter: Object
});
</script>
