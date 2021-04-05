<template>
	<div>
		<div
			class="group space-x-4 flex items-center pb-4 cursor-pointer hover:underline"
			@click="open = !open"
			v-if="!open"
		>
			<span>Read more</span>
			<i-heroicons-solid:chevron-down class="w-6 h-6 text-white mt-1" />
		</div>
		<transition
			name="test"
			enter-from-class="opacity-0 translate-y-8"
			enter-to-class="opacity-100 translate-y-0"
		>
			<div v-if="open" class="transition-all duration-300 transform">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false
		}
	}
}

</script>

<style scoped>
</style>
