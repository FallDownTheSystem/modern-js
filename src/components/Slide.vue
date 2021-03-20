<template>
	<component v-bind="$attrs" :is="currentComponent.component" :children="currentComponent.children"></component>
	<div class="space-x-2">
		<button
			class="px-4 py-1 text-white bg-green-500 disabled:bg-gray-400"
			@click="back"
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
import { defineProps, computed } from 'vue'
import { findChildren, getChildComponents } from '../routeHelper'

ref: contentIndex = 0;


const props = defineProps({
	children: Array
});

const route = useRoute();
const currentRoute = route.matched.filter(x => x.path == route.path)[0];
const childRoutes = props.children != null ? props.children : findChildren(currentRoute, route.path)
const childComponents = getChildComponents(childRoutes)

const start = computed(() => contentIndex == 0);
const end = computed(() => contentIndex == childComponents.length - 1);

const currentComponent = computed(() => childComponents[contentIndex]);

const forward = () => {
	if (contentIndex < childComponents.length - 1) {
		contentIndex++
	}
}

const back = () => {
	if (contentIndex > 0) {
		contentIndex--
	}
}
</script>
