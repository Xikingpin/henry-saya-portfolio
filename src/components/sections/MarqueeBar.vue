<script setup>
const items = [
  'Full Stack Development',
  'Systems Engineering',
  'Technical Support',
  'Python',
  'Vue.js',
  'Networking',
]
</script>

<template>
  <div class="border-y border-black/5 dark:border-white/5 bg-portfolio-gray/[0.03] dark:bg-portfolio-gray/60 py-4 overflow-hidden" aria-hidden="true">
    <div class="flex w-max animate-marquee gap-10 font-mono text-sm uppercase tracking-wide text-[#1A1A1A]/50 dark:text-white/50">
      <template v-for="n in 2" :key="n">
        <span v-for="(item, i) in items" :key="`${n}-${i}`" class="flex items-center gap-10 whitespace-nowrap">
          {{ item }}
          <span class="text-accent-blue">/</span>
        </span>
      </template>
    </div>
  </div>
</template>
