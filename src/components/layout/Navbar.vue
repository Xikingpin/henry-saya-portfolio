<script setup>
import { ref } from 'vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

const isOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-black/5 dark:border-white/5 bg-portfolio-light/80 dark:bg-portfolio-dark/80 backdrop-blur-md">
    <nav class="container-page flex items-center justify-between py-4" aria-label="Primary">
      <a href="#top" class="flex items-center gap-2 font-mono text-lg font-semibold text-[#1A1A1A] dark:text-white">
        <span class="text-accent-blue">&lt;</span>Henry Saya<span class="text-accent-blue">/&gt;</span>
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-[#1A1A1A]/70 dark:text-white/70 hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#contact"
          class="rounded-full bg-accent-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-blue-dim transition-colors"
        >
          Schedule a Call
        </a>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-[#1A1A1A] dark:text-white"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="isOpen" id="mobile-menu" class="md:hidden border-t border-black/5 dark:border-white/5">
      <ul class="container-page flex flex-col gap-1 py-4">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            @click="closeMenu"
            class="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#1A1A1A]/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {{ link.label }}
          </a>
        </li>
        <li class="pt-2">
          <a
            href="#contact"
            @click="closeMenu"
            class="block rounded-full bg-accent-blue px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Schedule a Call
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
