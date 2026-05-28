<script setup lang="ts">
	import { ref, onMounted } from "vue"
	import Vinyl from "./../assets/vinyl.png"

	import { get } from "./../lib/api.ts"
	import Lists from "./../layout/lists.vue"

	const lists = ref([])

	const props = defineProps({
		title: String,
		artist: String
	})
	
	onMounted(async () => {
		const api = await get("test")
		lists.value = api.data
		console.log(api)
	})

</script>

<template>
	<div class="flex flex-col p-2 w-[calc(25%-0.5rem)] h-full bg-green-950 rounded items-center gap-2">
		<div class="flex items-center justify-center aspect-square rounded-lg bg-[#41B883]/25">
			<img class="aspect-square rounded animate-spin w-[calc(85%-1rem)]" :src="Vinyl" alt="" />
		</div>
		<h1 class="text-white text-[1.25rem] font-bold">{{props.title ?? "Title"}}</h1>
		<h3 class="text-white text-[0.75rem]">{{props.artist ?? "Unknown Artist"}}</h3>
		<div class="flex flex-col w-full">
			<MusicCompat v-for="item in lists" :key="item.id" :title="item.title" :artist="item.artist" :setCurrent="props.setCurrent"/>
		</div>
	</div>
</template>
