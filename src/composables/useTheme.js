import { onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '../store/themeStore'

/**
 * Applies the current theme mode to <html class="dark">, defaults to
 * dark mode, and stays in sync with OS-level preference changes when
 * mode === 'system'.
 */
export function useTheme() {
  const store = useThemeStore()

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemChange = () => {
    if (store.mode === 'system') store.applyToDocument()
  }

  onMounted(() => {
    store.applyToDocument()
    mql.addEventListener('change', handleSystemChange)
  })

  onUnmounted(() => {
    mql.removeEventListener('change', handleSystemChange)
  })

  return { store }
}
