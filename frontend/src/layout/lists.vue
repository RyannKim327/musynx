<script setup lang="ts">
	import MusicCompat from "./../widget/music-compat.vue"

</script>

<template>
	<div class="flex flex-col w-[calc(75%-0.5rem)] bg-green-950/50 rounded gap-2 p-2">
		<MusicCompat title="Title Mo" artist="Artist Ko" />
		<MusicCompat title="Title Mo" />
	</div>
</template>
