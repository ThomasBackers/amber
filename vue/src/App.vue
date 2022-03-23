<script setup lang="ts">
const LOCAL_STORAGE_KEY: string = 'amberConfig'

console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
</script>

<template>
  <router-view></router-view>
</template>
