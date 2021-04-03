<template>
	<div class="flex flex-col mb-16 title items-center content-center">
		<h1 class="font-serif text-center title__header">
			<slot>{{ title }}</slot>
		</h1>
		<p class="text-center title__description text-gray-50">
			<slot name="description">{{ description }}</slot>
		</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			required: false,
			type: String,
		},
		description: {
			required: false,
			type: String,
		}
	}
}

</script>


<style>
.title {
	grid-column: 2 / span 9 !important;
}
.title .title__header {
	margin-bottom: 4rem !important;
	font-size: 8rem !important;
}

.title .title__description {
	margin: 0px !important;
}
</style>