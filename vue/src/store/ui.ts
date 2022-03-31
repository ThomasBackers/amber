import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', {
  state: () => ({
    showBottomMenu: false as boolean
  }),
  actions: {
    setShowBottomMenu (value: boolean): void {
      this.showBottomMenu = value
    }
  }
})
