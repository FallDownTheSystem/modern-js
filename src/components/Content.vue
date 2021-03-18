<template>
	<component :is="childComponents[contentIndex]"></component>
	<div class="space-x-2">
		<button
			class="px-4 py-1 text-white bg-green-500 disabled:bg-gray-400"
			@click="backward"
			:disabled="start"
		>Back</button>
		<button
			class="px-4 py-1 text-white bg-green-500 disabled:bg-gray-400"
			@click="forward"
			:disabled="end"
		>Forward</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, defineProps, computed } from 'vue'

const props = defineProps({
	name: String
});

ref: contentIndex = 0;

const componentName = props.name

const routes = useRoute()
const currentRoute = routes.matched.filter(x => x.path == routes.path)[0]
const childComponents = currentRoute.children.filter(x => x.path == componentName)[0].children.map(x => x.component);

const start = computed(() => contentIndex == 0);
const end = computed(() => contentIndex == childComponents.length - 1);

const forward = () => {
	if (contentIndex < childComponents.length - 1) {
		contentIndex++
	}
}

const backward = () => {
	if (contentIndex > 0) {
		contentIndex--
	}
}

</script>

<style scoped>
</style>
