<template>
	<div class="rounded-xl bg-gray-800 p-8 post__side-by-side">
		<slot></slot>
	</div>
</template>

<script setup>

</script>
	
<style>
.post__side-by-side {
	display: grid;
	grid-template-columns: 1fr 2rem 1fr;
	grid-column: 2 / span 7 !important;
}

.post__side-by-side > *:first-of-type {
	grid-column: 1;
}

.post__side-by-side > *:last-of-type {
	grid-column: 3;
}

.post__side-by-side h2 {
	margin-top: 0 !important;
}
</style>