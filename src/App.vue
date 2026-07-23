<script setup>
import { useTheme } from './composables/useTheme'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

useTheme()
</script>

<template>
  <div class="min-h-screen bg-portfolio-light dark:bg-portfolio-dark transition-colors duration-300">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
    >
      Skip to main content
    </a>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
