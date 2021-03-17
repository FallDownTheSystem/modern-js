<template>
	This is hello world
	<div>{{ msg }}</div>
	<div>{{ hello }}</div>
</template>

<script setup>
import { defineProps } from 'vue'
ref: hello = 4
defineProps({
	msg: String
})
</script>