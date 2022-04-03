<script setup lang="ts">
import { reactive } from 'vue'

const config = reactive({
  heading: 'login',
  inputs: [
    { type: 'email', placeholder: 'email' },
    { type: 'password', placeholder: 'password' }
  ],
  rememberMe: true,
  redirect: { label: 'create an account', to: 'register' },
  submitButtonLabel: 'sign in'
})

const setConfig = (target: string): void => {
  config.heading = target
  if (target === 'register') {
    config.inputs.unshift({ type: 'text', placeholder: 'username' })
    config.inputs.push({ type: 'password', placeholder: 'confirm password' })
    config.rememberMe = false
    config.redirect = { label: 'back to login', to: 'login' }
    config.submitButtonLabel = 'sign up'
  } else if (target === 'login') {
    config.inputs.shift()
    config.inputs.pop()
    config.rememberMe = true
    config.redirect = { label: 'create an account', to: 'register' }
    config.submitButtonLabel = 'sign in'
  }
}
</script>

<template>
  <section class="mx-auto w-4/5 py-4">
    <h2
      class="
        text-center font-medium tracking-widest capitalize mb-4 relative
        before:absolute before:left-0 before:top-1/2 before:h-[1px] before:bg-gray-400
        after:absolute after:right-0 after:top-1/2 after:h-[1px] after:bg-gray-400
      "
      :class="config.heading === 'login' ? 'before:w-1/3 after:w-1/3' : 'before:w-[27%] after:w-[27%]'"
    >
      {{ config.heading }}
    </h2>

    <form>
      <input
        v-for="(input, i) of config.inputs"
        :key="i"
        :type="input.type"
        :placeholder="input.placeholder"
        class="w-full rounded border-gray-300 mb-4 text-black"
      >

      <button
        type="button"
        class="mb-5 ml-1 text-sm underline tracking-widest text-gray-600 dark:text-gray-300 transition-colors"
        @click="setConfig(config.redirect.to)"
      >
        {{ config.redirect.label }}
      </button>

      <button
        type="submit"
        class="w-full rounded bg-gray-900 text-gray-200 py-[10px] font-medium text-sm uppercase tracking-widest"
      >
        {{ config.submitButtonLabel }}
      </button>
    </form>
  </section>
</template>
