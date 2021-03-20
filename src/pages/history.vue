
<template>
	<h1 class="mb-32 font-serif text-8xl">The History of JavaScript</h1>
	<router-link :to="{ name: 'index' }">Home Page</router-link>
	<div class="flex flex-col items-center w-full bg-green-100 bg-opacity-50 max-w-7xl">
		<Sections />
	</div>
</template>



<route>
{
	meta: {
		title: "The History of JavaScript",
		description: "This is an article about the history of js"
	}
}
</route>
