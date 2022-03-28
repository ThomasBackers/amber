<script setup lang="ts">
import { ChevronUpIcon } from '@heroicons/vue/outline'
</script>

<template>
  <button
    class="
      fixed bottom-4 left-1/2 -ml-[24px] p-2 bg-gray-900 text-gray-200 rounded-full shadow-md
      dark:bg-gray-200 dark:text-gray-900 dark:shadow-gray-700
    "
    @click="() => {}"
  >
    <ChevronUpIcon class="w-8" />
  </button>
</template>
