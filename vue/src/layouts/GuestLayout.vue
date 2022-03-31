<script setup lang="ts">
import { useUiStore } from '../store/ui'
import { storeToRefs } from 'pinia'
import ThemeToggleSwitch from '../components/ThemeToggleSwitch.vue'
import BottomMenuButton from '../components/BottomMenuButton.vue'

const uiStore = useUiStore()
const { showBottomMenu } = storeToRefs(uiStore)
const { setShowBottomMenu } = uiStore

const switchShowBottomMenu = (): void => setShowBottomMenu(!showBottomMenu.value)
</script>

<template>
  <div class="
    text-gray-800 font-raleway
    dark:bg-gray-900 dark:text-gray-200
  ">
    <header class="flex py-4 absolute w-full">
      <div class="mx-auto w-[90%] flex justify-end">
        <ThemeToggleSwitch />
      </div>
    </header>

    <section class="min-h-screen flex flex-col">
      <div class="m-auto w-4/5 text-center">
        <h1 class="capitalize text-7xl font-tangerine">
          amber
        </h1>

        <p class="text-gray-700 dark:text-gray-300 text-lg">
          sow memories like mosquitoes in amber
        </p>

        <button
          aria-label="more details"
          type="button"
          @click="() => {}"
          class="
            text-gray-200 bg-gray-900 rounded py-2 px-5 font-medium text-sm uppercase tracking-widest mt-5 shadow-md
            dark:text-gray-900 dark:bg-gray-200 dark:font-semibold dark:shadow-gray-700
          "
        >
          more details
        </button>
      </div>
    </section>

    <BottomMenuButton :showBottomMenu="showBottomMenu" @onClick="switchShowBottomMenu" />

    <footer class="
      fixed bottom-0 left-1/2 w-4/5 -ml-[40%] h-2 bg-gray-200 border-t-[1px] border-x-[1px] border-gray-400 rounded-t
      dark:bg-gray-600
    ">
      <router-view></router-view>
    </footer>
  </div>
</template>
