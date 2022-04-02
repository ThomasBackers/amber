<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ showBottomMenu: Boolean }>()
</script>

<template>
  <footer
    class="
      fixed bottom-0 left-1/2 w-4/5 -ml-[40%] bg-gray-200 border-t-[1px] border-x-[1px]
      border-gray-400 rounded-t shadow-lg transition-all overflow-hidden flex flex-col
      dark:bg-gray-600 dark:shadow-gray-700
    "
    :class="showBottomMenu ? 'h-3/4' : 'h-2'"
  >
    <section class="mx-auto w-4/5 py-4">
      <h2 class="text-center font-medium tracking-widest capitalize mb-4">
        login
      </h2>

      <form>
        <input
          type="email"
          placeholder="email"
          class="w-full rounded border-gray-300 mb-4 text-black"
        >

        <input
          type="password"
          placeholder="password"
          class="w-full rounded border-gray-300 mb-4 text-black"
        >

        <button
          type="button"
          class="mb-5 ml-1 text-sm underline tracking-widest text-gray-600 dark:text-gray-400 transition-colors"
        >
          create an account
        </button>

        <button
          type="submit"
          class="w-full rounded bg-gray-900 text-gray-200 py-[10px] font-medium text-sm uppercase tracking-widest"
        >
          sign in
        </button>
      </form>
    </section>

    <p class="text-center">
      <span class="relative top-0.5">&copy;</span>

      {{ new Date().getFullYear() }}

      <span class="text-sm">Amber</span>
    </p>
  </footer>
</template>
