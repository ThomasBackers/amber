<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUIStore } from '../store/UI'

const UIStore = useUIStore()
const { theme } = storeToRefs(UIStore)

console.log(theme.value)
</script>

<template>
  <div class="min-h-screen">
    <router-view></router-view>
  </div>
</template>
