<script setup lang="ts">
import { defineProps } from 'vue'
import AuthForm from './AuthForm.vue'

defineProps<{ showBottomMenu: Boolean }>()
</script>

<template>
  <footer
    class="
      fixed bottom-0 left-1/2 w-4/5 -ml-[40%] bg-gray-200 border-t-[1px] border-x-[1px]
      border-gray-400 rounded-t shadow-lg transition-all overflow-hidden flex flex-col
      dark:bg-gray-600 dark:shadow-gray-700
    "
    :class="showBottomMenu ? 'h-[512px]' : 'h-2'"
  >
    <AuthForm />

    <p class="text-center">
      <span class="relative top-0.5">
        &copy;
      </span>

      {{ new Date().getFullYear() }}

      <span class="text-sm">
        Amber
      </span>
    </p>
  </footer>
</template>
