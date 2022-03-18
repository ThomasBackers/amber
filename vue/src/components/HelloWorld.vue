<script setup lang="ts">
import { defineProps } from 'vue'
import { mapActions, storeToRefs } from 'pinia'
import { useUserStore } from '../store/user'

const userStore = useUserStore()
const { profile, token } = storeToRefs(userStore)
const { setUser } = mapActions(useUserStore, ['setUser'])

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
  console.log(profile.value, token.value)
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <ul
      class="h-4 bg-black text-white"
      @click="onListClick"
    >
      <li>{{ profile }}</li>
      <li>{{ token }}</li>
    </ul>
  </div>
</template>
