<script setup lang="ts">
import { ref, Ref } from 'vue'

const root: HTMLElement = document.documentElement
const slider: Ref<HTMLElement | null> = ref(null)

const switchTheme = (): void => {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark')
    if (slider.value) slider.value.style.transform = 'translateX(0px)'
    localStorage.setItem('theme', 'light')
  } else {
    root.classList.add('dark')
    if (slider.value) slider.value.style.transform = 'translateX(20px)'
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <div
    aria-label="theme toggle switch"
    @click="switchTheme"
    class="border-2 border-gray-200 rounded-2xl w-12 flex p-1 cursor-pointer"
  >
    <button
      ref="slider"
      class="bg-gray-200 w-4 h-4 rounded-2xl transition-transform"
      :class="root.classList.contains('dark') ? 'translate-x-5' : 'translate-x-0'"
    ></button>
  </div>
</template>
