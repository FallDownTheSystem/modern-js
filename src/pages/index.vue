<template>
	<div class="prose prose-lg mb-16">
		<Title>
			Modern JavaScript
			<template v-slot:description>
				<div>
					<i>
						A series of posts describing how JavaScript came to be the language it is today,
						<br />what new features got added to the language along the way,
						<br />and what modern JavaScript development looks like.
					</i>
					<br />
					<br />
					<span
						class="font-light text-sm text-gray-400"
					>Updated {{ new Date(2021, 3, 3).toLocaleDateString() }}</span>
				</div>
			</template>
		</Title>
	</div>
	<div class="w-32 bg-gray-400 h-[1px] mb-16"></div>
	<div class="flex flex-col space-y-4 items-start">
		<router-link
			v-for="link in children"
			:to="{ name: link.name }"
			class="group hover:bg-gray-800 text-gray-100 rounded-xl py-6 px-8 w-full"
		>
			<div class="flex items-center content-center justify-between space-x-8">
				<div>
					<h2
						class="text-3xl font-serif font-bold tracking-wide mb-2"
					>{{ link?.meta?.title ?? link.name }}</h2>
					<p class="italic text-gray-200">{{ link?.meta?.description }}</p>
				</div>
				<i-heroicons-outline:arrow-right class="w-8 h-8 group-hover:text-gray-300 text-gray-700" />
			</div>
		</router-link>
	</div>
	<div class="h-32"></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { sortBy } from 'lodash-es';
const routes = useRoute()
const children = sortBy(routes
	.matched.filter(x => x.path == routes.path)[0]
	.children.filter(x => x.path !== '/' && x.name !== 'all'),
	'meta.order'
);
</script>

<route lang="yaml">
meta:
  layout: home
</route>