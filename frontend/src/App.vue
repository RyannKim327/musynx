<script setup lang="ts">
  import { ref } from "vue"
  import BottomPlayer from "./widget/bottom-player.vue"
  import Lists from "./layout/lists.vue"
  import Player from "./widget/player.vue"

  const current = ref({
		title: "",
		id: "",
		artist: ""
	})
  
  function setCurrent(title: string, artist: string, id: string){
		current.value = {
			title: title,
			artist: artist,
			id: id
		}
		console.log("Logs")
	}

</script>

<template>
  <div class="flex flex-col h-dvh w-dvw bg-[#34495E] justify-evenly p-2 overflow-hidden gap-1">
    <div class="flex flex-1 w-full justify-evenly">
      <Lists :setCurrent="setCurrent" />
      <Player :title="current.title" :artist="current.artist" />
    </div>
    <BottomPlayer :title="current.title" :artist="current.artist" />
  </div>

</template>
