import { defineStore } from 'pinia'

export interface UIState {
  theme: string
}

export const useUIStore = defineStore('UIStore', {
  state: () => ({
    theme: 'light'
  } as UIState),

  actions: {
    switchTheme (): void {
      this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light'
    }
  }
})
