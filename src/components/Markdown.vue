<template>
	<slot :frontmatter="frontmatter" v-bind="$attrs"></slot>
</template>

<script setup>
import { defineProps, onMounted, defineEmit } from 'vue';

const props = defineProps({
	frontmatter: Object
});

const emit = defineEmit(['mounted']);

onMounted(() => {
	emit('mounted');
});
</script>
