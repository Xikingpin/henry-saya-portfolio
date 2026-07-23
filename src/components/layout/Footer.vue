<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-black/5 dark:border-white/5">
    <div class="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p class="font-mono text-xs text-[#1A1A1A]/50 dark:text-white/50">
        © {{ year }} Henry Saya. Built with Vue &amp; Tailwind.
      </p>
      <div class="flex items-center gap-2 font-mono text-xs text-[#1A1A1A]/50 dark:text-white/50">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-signal"></span>
        </span>
        Available for new opportunities
      </div>
    </div>
  </footer>
</template>
