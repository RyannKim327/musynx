<script setup lang="ts">
  import Lists from "./layout/lists.vue"
  import Player from "./widget/player.vue"
</script>

<template>
  <div class="flex h-dvh w-dvw bg-[#34495E] justify-evenly p-2 overflow-hidden">
    <Lists />
    <Player title="Title ko" artist="Artist Mo" />
  </div>

</template>
