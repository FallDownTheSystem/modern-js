<template>
	<div class="flex flex-col">
		<span>This is the history page</span>
		<component
			v-for="child in childComponents"
			:is="child.asynComponent"
			:key="child.name"
			:name="child.name"
		></component>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
var routes = useRoute()
var currentRoute = routes.matched.filter(x => x.path == routes.path)[0]

var childComponents = currentRoute.children.map(x => {
	x.component()
	return {
		asynComponent: defineAsyncComponent({
			loader: x.component,
		}),
		name: x.path
	}
})
</script>

<style scoped>
</style>

<route>
{
	name: 'history'
}
</route>