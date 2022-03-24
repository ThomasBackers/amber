<script setup lang="ts">
const switchTheme = (): void => {}
</script>

<template>
  <div
    aria-label="theme toggle switch"
    @click="switchTheme"
    class=""
  >
    <button
      aria-label="slider"
      class=""
    ></button>
  </div>
</template>

<style>
@keyframes themeToggleSwitch {
  0% {}
  100% {}
}
</style>
