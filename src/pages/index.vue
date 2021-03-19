<template>
	<img alt="Vue logo" src="@/assets/logo.png" />
	<i-heroicons-outline:emoji-happy class="w-8 h-8" />

	<div class="flex flex-col items-start space-y-2">
		<router-link
			v-for="link in children"
			:to="{ name: link.name }"
			class="p-2 bg-gray-300 border border-black"
		>{{ link?.meta?.title ?? link.name }}</router-link>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const routes = useRoute()
const children = routes.matched.filter(x => x.path == routes.path)[0].children.filter(x => x.path !== '/')
</script>
