<template>
	<span>Another section</span>
	<component :is="childComponents[contentIndex]"></component>
	<div class="space-x-2">
		<button class="px-4 py-1 text-white bg-green-500" @click="contentIndex--">Back</button>
		<button class="px-4 py-1 text-white bg-green-500" @click="contentIndex++">Forward</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, defineProps } from 'vue'

ref: contentIndex = 0;

const props = defineProps({
	name: String
});

const componentName = props.name

var routes = useRoute()
var currentRoute = routes.matched.filter(x => x.path == routes.path)[0]
var childComponents = currentRoute.children.filter(x => x.path == componentName)[0].children.map(x => {
	// Load each component ahead of time
	x.component();

	return defineAsyncComponent({
		loader: x.component,
	})
})

</script>

<style scoped>
</style>
