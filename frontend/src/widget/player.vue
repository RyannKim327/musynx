<script setup lang="ts">
	import Vinyl from "./../assets/vinyl.png"
	const props = defineProps({
		title: String,
		artist: String
	})
</script>

<template>
	<div class="flex flex-col p-2 w-[calc(25%-0.5rem)] h-full bg-green-950 rounded items-center gap-2">
		<div class="aspect-square rounded-lg bg-[#41B883]/25">
			<img class="aspect-square rounded animate-spin" :src="Vinyl" alt="" />
		</div>
		<h1 class="text-white text-[1.25rem] font-bold">{{props.title ?? "Title"}}</h1>
		<h3 class="text-white text-[0.75rem]">{{props.artist ?? ""}}</h3>
	</div>
</template>
