<script setup lang="ts">
import { defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store/user'

const userStore = useUserStore()
const { profile, token } = storeToRefs(userStore)
const { setUser } = userStore

defineProps<{
  msg: String
}>()

const onListClick = () => {
  if (!profile.value && !token.value) {
    setUser({
      avatarUrl: './randomPicture.jpg',
      username: 'Admin'
    }, 'YgxHjK15JHJ5444KjhdbTGx')
  } else setUser(null, null)
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <ul
      class="h-14 bg-black text-white"
      @click="onListClick"
    >
      <li>{{ profile?.avatarUrl }} {{ profile?.username }}</li>
      <li>{{ token }}</li>
    </ul>
  </div>
</template>
