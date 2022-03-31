<script setup lang="ts">
import { defineProps } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/outline'

defineProps<{ showBottomMenu: Boolean }>()
</script>

<template>
  <button
    class="
      fixed bottom-5 left-1/2 -ml-[24px] p-2 bg-gray-900 text-gray-200 rounded-full shadow-md
      dark:bg-gray-200 dark:text-gray-900 dark:shadow-gray-700
    "
    @click="$emit('onClick')"
  >
    <ChevronUpIcon class="w-8 transition-transform" :class="showBottomMenu ? 'rotate-180' : ''" />
  </button>
</template>
