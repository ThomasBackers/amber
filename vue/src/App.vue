<script setup lang="ts">
import { useUIStore } from './store/UI'

const UIStore = useUIStore()
const { switchTheme } = UIStore

const LOCAL_STORAGE_KEY: string = 'amberConfig'
const config = localStorage.getItem(LOCAL_STORAGE_KEY)
if (!config) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
    theme: 'light'
  }))
}
</script>

<template>
  <router-view></router-view>
</template>
