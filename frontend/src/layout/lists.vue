<script setup lang="ts">
	import { ref, onMounted } from "vue"

	import MusicCompat from "./../widget/music-compat.vue"
	import { get } from "./../lib/api.ts"

	const props = defineProps({
		setCurrent: Function,
	})

	const lists = ref([])

	onMounted(async () => {
		const api = await get("test")
		lists.value = api.data
		console.log(api)
	})

</script>

<template>
	<div class="flex flex-col w-[calc(75%-0.5rem)] bg-green-950/50 rounded gap-2 p-2">
		<MusicCompat v-for="item in lists" :key="item.id" :title="item.title" :artist="item.artist" :setCurrent="props.setCurrent"/>
	</div>
</template>
