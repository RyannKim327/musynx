<script setup lang="ts">
	import Vinyl from  "./../assets/vinyl.png"
	const props = defineProps({
		title: String,
		artist: String
	})
</script>

<template>
	<div class="flex w-full items-center p-2 bg-green-500/25 rounded">
		<img class="aspect-square h-[3rem]" :src="Vinyl" alt="">
		<div class="flex flex-col text-white">
			<span class="text-[1rem]">{{ props.title }}</span>
			<span class="text-[0.75rem]">{{ props.artist ?? "Unknown Artist" }}</span>
		</div>
	</div>
</template>
