<script setup lang="ts">
import ThemeToggleSwitch from '../components/ThemeToggleSwitch.vue'
</script>

<template>
  <div class="
    min-h-screen text-gray-800
    dark:bg-gray-900 dark:text-gray-200
  ">
    <header class="flex py-4">
      <div class="mx-auto w-[90%] flex justify-end">
        <ThemeToggleSwitch />
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      &copy; 2022
    </footer>
  </div>
</template>
