<template>
	<div class="relative">
		<nav
			class="flex justify-center fixed text-white pl-4 top-1/2 transform -translate-y-1/2"
			aria-label="Progress"
		>
			<ol class="space-y-4">
				<li v-for="h in headings" :key="h.hash">
					<!-- Current Step -->
					<a
						:href="h.hash"
						class="flex items-start group"
						:class="{ 'ml-3': h.type == 'H3', 'ml-6': h.type == 'H4' }"
						aria-current="step"
					>
						<span
							class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
							aria-hidden="true"
						>
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
									'bg-gray-500 group-hover:bg-gray-300': current != h.hash
								}"
							></span>
						</span>
						<span
							class="ml-3 text-sm font-medium truncate w-56"
							:class="{
								'text-pink-600': current == h.hash,
								'text-gray-500 group-hover:text-gray-300': current != h.hash
							}"
						>{{ h.title }}</span>
					</a>
				</li>
			</ol>
		</nav>
		<SiteHeader />
		<main ref="root">
			<div id="content" class="flex flex-col items-center content-center">
				<router-view />
			</div>
		</main>
		<SiteFooter />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onUpdated, ref, computed } from 'vue'

ref: index = 0;
ref: sections = [];
ref: current = '#what-if-we-stack-headings'

const root = ref(null);

const parseHeading = (x) => {
	const title = x.innerText.replace('#', '').trim();
	const obj = { title, hash: x.children[0]?.hash ?? '#', type: x.tagName, pos: x.getBoundingClientRect().top };
	console.log(obj);
	return obj;
}

// setTimeout(() => {
// 	const element = document.querySelector(to.hash);
// 	const offset = 40;
// 	const bodyRect = document.body.getBoundingClientRect().top;
// 	const elementRect = element.getBoundingClientRect().top;
// 	const elementPosition = elementRect - bodyRect;
// 	const offsetPosition = elementPosition - offset;

// 	window.scrollTo({
// 		top: offsetPosition,
// 		behavior: 'smooth'
// 	});
// }, 0);

const headings = computed(() => sections.filter(x => x.closest('.slides') == null).map(x => parseHeading(x)));

const jumps = computed(() => sections.map(x => x));

onMounted(() => {

	document.addEventListener('scroll', function(e) {
		for (const heading of headings.value) {
			if (heading.pos < (window.scrollY + (window.innerHeight / 3))) {
				current = heading.hash;
			}
		}
	});

	const observer = new MutationObserver((mutationsList, observer) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				sections = [...root.value.querySelectorAll('h1, h2, h3, h4, .slides')]
			}
		}
	});

	observer.observe(root.value, { attributes: false, childList: true, subtree: true });

	// Watch for changes for 2 seconds and update the god damned headings, then stop so we don't waste resources
	setTimeout(() => {
		observer.disconnect();
	}, 2000)

})



</script>