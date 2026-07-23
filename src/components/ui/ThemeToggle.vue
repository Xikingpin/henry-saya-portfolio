<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../../store/themeStore'

const store = useThemeStore()

const label = computed(() => {
  if (store.mode === 'system') {
    return 'Following system theme. Switch to manual (opposite) theme.'
  }
  return store.manualIsDark
    ? 'Manual dark mode. Switch back to following system theme.'
    : 'Manual light mode. Switch back to following system theme.'
})
</script>

<template>
  <button
    type="button"
    @click="store.toggle()"
    :aria-label="label"
    :title="label"
    class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-[#1A1A1A] dark:text-white hover:border-accent-blue/60 hover:text-accent-blue transition-colors"
  >
    <!-- System mode: monitor/auto icon -->
    <svg v-if="store.mode === 'system'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
    <!-- Manual mode, currently dark: moon -->
    <svg v-else-if="store.manualIsDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
    <!-- Manual mode, currently light: sun -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  </button>
</template>
