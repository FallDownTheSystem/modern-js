<template>
	<div class="mt-64">
		<div class="flex justify-between p-8 max-w-[44rem] mx-auto">
			<div class="flex text-gray-200 space-x-8">
				<i-heroicons-outline:arrow-left class="w-6 h-6" />
				<span>Previous article</span>
			</div>
			<div class="flex text-gray-200 space-x-8">
				<span>Next article</span>
				<i-heroicons-outline:arrow-right class="w-6 h-6" />
			</div>
		</div>

		<div class="flex content-center items-center p-8 space-x-8">
			<router-link :to="{ name: 'index' }" class="text-gray-50 hover:text-pink-600 focus:text-pink-600 text- focus:outline-none">
				<i-heroicons-outline:code class="w-7 h-7" />
			</router-link>
			<div class="bg-gray-400 w-full h-[1px]"></div>
			<p class="min-w-max text-white">(•‿•)ﾉ Hi!</p>
			<div class="bg-gray-400 w-full h-[1px]"></div>
			<a
				href="https://github.com/FallDownTheSystem/modern-js"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-50 hover:text-pink-600 focus:text-pink-600 focus:outline-none"
			>
				<i-mdi:github class="w-7 h-7" />
			</a>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { sortBy } from 'lodash-es';
const route = useRoute().matched.find(x => x.path !== '/').path;
const articles = sortBy(
	useRouter()
		.getRoutes()
		.filter(x => x.path !== '/' && x.name !== 'all'),
	'meta.order'
);
</script>

<style scoped></style>
