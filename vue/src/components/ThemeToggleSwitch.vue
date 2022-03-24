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
    if (slider.value) slider.value.style.transform = 'translateX(22px)'
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<template>
  <div
    aria-label="theme toggle switch"
    @click="switchTheme"
    class="
      border-[1px] border-gray-400 bg-gray-200 rounded-2xl w-12 h-[1.625rem] relative cursor-pointer
      dark:border-gray-400 dark:bg-gray-600
    "
  >
    <button
      ref="slider"
      aria-label="slider"
      type="button"
      class="
        w-4 h-4 bg-white rounded-2xl shadow transition-transform absolute top-1 left-1
        dark:bg-gray-300 dark:shadow-gray-700
      "
      :class="root.classList.contains('dark') ? 'translate-x-[22px]' : 'translate-x-0'"
    ></button>
  </div>
</template>
