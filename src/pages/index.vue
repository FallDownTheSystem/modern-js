<template>
	<div class="prose prose-lg mb-16">
		<div class="font-display invisible h-0 w-0 absolute" aria-hidden="true">Preloading font</div>
		<Title>
			<div class="group">
				Modern
				<span>
					<span
						class="inline-block group-hover:-mb-4 group-hover:text-black group-hover:font-display group-hover:font-bold group-hover:px-[8.5px] group-hover:pb-2 group-hover:bg-js"
					>
						JavaScript
					</span>
				</span>
			</div>

			<template v-slot:description>
				<div>
					A series of posts describing how JavaScript came to be the language it is today,
					<br />
					what new features got added to the language along the way,
					<br />
					and what modern JavaScript development looks like.
					<div class="font-light text-sm mt-12 text-gray-400">Updated {{ new Date(2021, 3, 3).toLocaleDateString() }}</div>
				</div>
			</template>
		</Title>
	</div>
	<div class="w-32 bg-gray-400 h-[1px] mb-16"></div>
	<div class="flex flex-col space-y-4 items-start">
		<router-link
			v-for="link in children"
			:to="{ name: link.name }"
			class="group hover:bg-gray-800 focus:outline-none focus:bg-gray-800 text-gray-100 rounded-xl py-6 px-8 w-full"
		>
			<div class="flex items-center content-center justify-between space-x-12">
				<div>
					<h2 class="text-3xl font-serif font-bold tracking-wide mb-2">{{ link?.meta?.title ?? link.name }}</h2>
					<p class="italic text-gray-300 w-[32rem]">{{ link?.meta?.description }}</p>
				</div>
				<i-heroicons-outline:arrow-right class="w-7 h-7 group-hover:text-gray-300 group-focus:text-gray-300 text-gray-600" />
			</div>
		</router-link>
	</div>
	<div class="h-32"></div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { defineAsyncComponent, defineEmit } from 'vue';
import { sortBy } from 'lodash-es';
const routes = useRoute();
const children = sortBy(
	routes.matched.filter(x => x.path == routes.path)[0].children.filter(x => x.path !== '/' && x.name !== 'all'),
	'meta.order'
);

// We have to define the emit here as well, even though the index page doesn't emit anything.
// Seems to be a bug, maybe related to the vite plugin vue layouts or vite plugin pages?
const emit = defineEmit(['mounted']);
</script>

<route>
{
	meta: {
		layout: "home"
	}
}
</route>
