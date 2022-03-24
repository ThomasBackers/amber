<script setup lang="ts">
// Check if the web app should be rendered in dark mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) document.documentElement.classList.add('dark')
</script>

<template>
  <router-view></router-view>
</template>
