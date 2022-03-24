<script setup lang="ts">
import ThemeToggleSwitch from '../components/ThemeToggleSwitch.vue'
</script>

<template>
  <div class="min-h-screen dark:bg-black">
    <ThemeToggleSwitch />
    <router-view></router-view>
  </div>
</template>
