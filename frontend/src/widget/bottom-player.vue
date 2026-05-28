<script setup lang="ts">
	import Vinyl from "./../assets/vinyl.png"

	const props = defineProps({
		title: String, 
		artist: String
	})
	
</script>

<template>
	<div class="flex items-center bg-green-900/50 w-full h-[75px] p-2">
		<div class="flex items-center gap-1 w-[calc(33.333%-0.5rem)] h-full">
			<img :src="Vinyl" class="h-full aspect-square" />
			<div class="flex flex-col">
				<span class="text-[1.25rem]">{{ props.title }}</span>
				<span class="text-[0.75rem]">{{ props.artist }}</span>
			</div>
		</div>
		<div class="flex items-center gap-1 w-[calc(33.333%-0.5rem)] h-full">
			player
		</div>
	</div>
</template>
