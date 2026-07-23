import { defineStore } from 'pinia'

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    // 'system': follow the OS preference.
    // 'manual': locked to the opposite of whatever the OS preference was
    //           at the moment the user toggled away from 'system'.
    mode: localStorage.getItem('theme-mode') || 'system',
    manualIsDark: localStorage.getItem('theme-manual-is-dark') === 'true',
  }),
  getters: {
    isDark(state) {
      if (state.mode === 'system') return systemPrefersDark()
      return state.manualIsDark
    },
  },
  actions: {
    toggle() {
      if (this.mode === 'system') {
        // Switch to manual, locked to the opposite of the current system look.
        this.manualIsDark = !systemPrefersDark()
        this.mode = 'manual'
      } else {
        // Switch back to following the system.
        this.mode = 'system'
      }
      localStorage.setItem('theme-mode', this.mode)
      localStorage.setItem('theme-manual-is-dark', String(this.manualIsDark))
      this.applyToDocument()
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
