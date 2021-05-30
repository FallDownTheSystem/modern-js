<template>
	<div>
		<div v-for="name in names" class="border border-dashed border-gray-500 p-1 m-1 rounded-lg">
			<span>My name is: </span>
			<span class="text-green-300">{{ name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			names: ['John', 'Jane', 'Lisa', 'Mike']
		};
	}
};
</script>
