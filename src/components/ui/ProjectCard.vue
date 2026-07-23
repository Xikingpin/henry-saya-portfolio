<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  stack: { type: Array, required: true },
  link: { type: String, default: '#' },
  linkLabel: { type: String, default: 'GitHub' },
})
</script>

<template>
  <article
    class="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-portfolio-gray/[0.02] dark:bg-portfolio-gray overflow-hidden"
  >
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="image"
        :alt="alt"
        loading="lazy"
        class="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
      />
      <div
        class="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        aria-hidden="true"
      >
        <p class="text-sm font-semibold text-white text-center">{{ title }}</p>
        <div class="mt-2 flex flex-wrap justify-center gap-1.5">
          <span
            v-for="tech in stack"
            :key="tech"
            class="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] text-white"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-lg font-semibold text-[#1A1A1A] dark:text-white">{{ title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-[#1A1A1A]/65 dark:text-white/65">
        {{ description }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in stack"
          :key="tech"
          class="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 font-mono text-xs text-[#1A1A1A]/70 dark:text-white/70"
        >
          {{ tech }}
        </span>
      </div>

      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue-dim transition-colors"
      >
        {{ linkLabel }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true">
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </a>
    </div>
  </article>
</template>
