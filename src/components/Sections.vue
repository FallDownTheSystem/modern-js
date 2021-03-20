<template>
	<component
		v-bind="$attrs"
		v-for="cc in childComponents"
		:is="cc.component"
		:key="cc.name"
		:children="cc.children"
	></component>
</template>

<script setup>
import { defineAsyncComponent, defineProps } from 'vue'
import { useRoute } from 'vue-router';
import { findChildren, getChildComponents } from '../routeHelper'

const props = defineProps({
	children: Array
});

const route = useRoute();
const currentRoute = route.matched.filter((x) => x.path == route.path)[0];
const childRoutes = props.children != null ? props.children : findChildren(currentRoute, route.path)
const childComponents = getChildComponents(childRoutes)
</script>
