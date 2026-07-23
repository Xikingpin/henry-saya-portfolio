import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    // 'light' | 'dark' | 'system'
    mode: localStorage.getItem('theme-mode') || 'system',
  }),
  getters: {
    isDark(state) {
      if (state.mode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      return state.mode === 'dark'
    },
  },
  actions: {
    setMode(mode) {
      this.mode = mode
      localStorage.setItem('theme-mode', mode)
      this.applyToDocument()
    },
    cycleMode() {
      const order = ['dark', 'light', 'system']
      const next = order[(order.indexOf(this.mode) + 1) % order.length]
      this.setMode(next)
    },
    applyToDocument() {
      const root = document.documentElement
      if (this.isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    },
  },
})
