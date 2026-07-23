<script setup></script>

<template>
  <section id="top" class="relative overflow-hidden pt-16 pb-10 sm:pt-24">
    <!-- ambient network-node backdrop -->
    <div class="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] dark:opacity-[0.12]" aria-hidden="true">
      <svg width="100%" height="100%">
        <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" class="text-accent-blue" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container-page grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div>
        <p class="eyebrow mb-4 flex items-center gap-2">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-signal"></span>
          </span>
          system online
        </p>

        <h1 class="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1A1A1A] dark:text-white sm:text-5xl lg:text-6xl">
          Henry Saya
        </h1>
        <p class="mt-3 font-mono text-lg text-accent-blue sm:text-xl">
          Software Engineer
        </p>

        <p class="mt-6 max-w-xl text-base text-[#1A1A1A]/70 dark:text-white/70 sm:text-lg">
          I build reliable software and the networks it runs on — from full-stack
          web apps to first-line technical support, with an eye for detail at every layer.
        </p>

        <dl class="mt-8 flex gap-8">
          <div>
            <dt class="sr-only">Years of experience</dt>
            <dd class="text-2xl font-bold text-[#1A1A1A] dark:text-white">3+</dd>
            <dd class="font-mono text-xs uppercase tracking-wide text-[#1A1A1A]/50 dark:text-white/50">Years Experience</dd>
          </div>
          <div>
            <dt class="sr-only">Projects contributed to</dt>
            <dd class="text-2xl font-bold text-[#1A1A1A] dark:text-white">33+</dd>
            <dd class="font-mono text-xs uppercase tracking-wide text-[#1A1A1A]/50 dark:text-white/50">Projects Contributed</dd>
          </div>
        </dl>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            class="rounded-full bg-accent-blue px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-blue-dim transition-colors"
          >
            Contact Now
          </a>
          <a
            href="#projects"
            class="rounded-full border border-[#1A1A1A]/15 dark:border-white/20 px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] dark:text-white hover:border-accent-blue hover:text-accent-blue transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm md:max-w-none">
        <div class="relative mx-auto aspect-square w-64 sm:w-80 md:w-full md:max-w-sm">
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue/30 to-signal/20 blur-2xl" aria-hidden="true"></div>
          <div class="relative h-full w-full overflow-hidden rounded-full border-4 border-portfolio-light dark:border-portfolio-gray shadow-xl">
            <img
              src="/images/profile.png"
              alt="Program Earth Open Source Fellow badge, Fullstack track, awarded to Henry Saya"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
