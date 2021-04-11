<template>
	<slot :frontmatter="frontmatter" v-bind="$attrs"></slot>
</template>

<script setup>
import { defineProps, onMounted, defineEmit } from 'vue';

const emit = defineEmit();

const props = defineProps({
	frontmatter: Object
});

onMounted(() => {
	emit('mounted');
});
</script>
