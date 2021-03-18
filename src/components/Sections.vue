<template>
	<component
		v-for="child in childComponents"
		:is="child.component"
		:key="child.name"
		:name="child.name"
	></component>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const routes = useRoute()
const currentRoute = routes.matched.filter(x => x.path == routes.path)[0]

// Making sure :is works with sync and async components.
const childComponents = currentRoute.children.map(x => {
	if (typeof x.component == 'function') {
		return { name: x.path, component: defineAsyncComponent({ loader: x.component }) }
	}
	return { name: x.path, component: x.component }
})
</script>

<style scoped>
</style>