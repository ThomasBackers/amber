<script setup lang="ts">
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) document.documentElement.classList.add('dark')
</script>

<template>
  <router-view></router-view>
</template>
