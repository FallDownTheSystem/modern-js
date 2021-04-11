<template>
	<div class="relative">
		<SiteHeader />
		<Transition
			appear
			enter-from-class="opacity-0 -translate-x-64"
			enter-active-class="delay-200"
			enter-to-class="opacity-100 translate-x-0"
		>
			<nav
				class="transition-all transform duration-300 hidden full:flex justify-center fixed text-white pl-4 top-1/2 transform -translate-y-1/2"
				aria-label="Progress"
			>
				<ol class="space-y-4">
					<li>
						<router-link :to="{ name: 'index' }" class="flex items-center group outline-none" aria-current="step">
							<i-tabler:arrow-narrow-left class="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300" />
							<span class="ml-3 text-sm font-medium truncate w-56 text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300">
								Home
							</span>
						</router-link>
					</li>
					<li v-for="h in headings" :key="h.hash">
						<!-- Current Step -->
						<a
							:href="h.hash"
							class="flex items-center group outline-none"
							:class="{ 'ml-3': h.type == 'H3', 'ml-6': h.type == 'H4' }"
							aria-current="step"
						>
							<span class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
								<span
									v-if="current == h.hash"
									class="absolute rounded-full bg-pink-900"
									:class="{ 'h-4 w-4': h.type == 'H2' || h.type == 'H1', 'h-3 w-3': h.type == 'H3', 'h-2 w-2': h.type == 'H4' }"
								></span>
								<span
									class="relative block rounded-full"
									:class="{
										'w-2 h-2': h.type == 'H2' || h.type == 'H1',
										'w-1.5 h-1.5': h.type == 'H3',
										'w-1 h-1': h.type == 'H4',
										'bg-pink-600': current == h.hash,
										'bg-gray-500 group-hover:bg-gray-300 group-focus:bg-gray-300': current != h.hash
									}"
								></span>
							</span>
							<span
								class="ml-3 text-sm font-medium truncate w-56"
								:class="{
									'text-pink-600 group-focus:underline': current == h.hash,
									'text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300': current != h.hash
								}"
							>
								{{ h.title }}
							</span>
						</a>
					</li>
				</ol>
			</nav>
		</Transition>

		<main ref="root">
			<div id="content" class="flex flex-col items-center content-center">
				<router-view @mounted="updateSections" />
			</div>
		</main>
		<SiteFooter />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, onUpdated, ref, computed } from 'vue';

ref: index = 0;
ref: sections = [];
ref: current = '#';

const root = ref(null);

const parseHeading = x => {
	const title = x.innerText.replace('#', '').trim();
	const obj = { title, hash: x.children[0]?.hash ?? '#', type: x.tagName, pos: x.getBoundingClientRect().top + window.scrollY };
	return obj;
};

const updateSections = () => {
	sections = [...root.value.querySelectorAll('h1, h2, h3, h4')];
};

const headings = computed(() => sections.filter(x => x.closest('.slides') == null).map(x => parseHeading(x)));

onMounted(() => {
	document.addEventListener('scroll', function (e) {
		for (const heading of headings.value) {
			if (heading.pos < window.scrollY + window.innerHeight / 2.1) {
				current = heading.hash;
			} else {
				break;
			}
		}
	});
});
</script>
