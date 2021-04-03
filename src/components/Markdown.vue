<template>
	<slot :children="children" :frontmatter="frontmatter" v-bind="$attrs"></slot>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	children: Array,
	frontmatter: Object
});
</script>
