<script setup>
const skills = [
  'Python', 'C', 'PHP', 'Vue.js', 'JavaScript', 'SQL', 'Git', 'Linux', 'Cybersecurity', 'Networking',
]

const services = [
  {
    title: 'IT Support & Systems',
    description:
      'First-level technical support, device management, SOHO/network configuration, firewalls, backups and recovery — keeping infrastructure stable and secure.',
  },
  {
    title: 'Full Stack Development',
    description:
      'Web applications built with Python, PHP, Vue.js and SQL, from database design through to a polished, responsive interface.',
  },
]
</script>

<template>
  <section id="about" class="py-20 sm:py-28 scroll-mt-24">
    <div class="container-page">
      <p class="eyebrow mb-3">// about</p>
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div class="lg:col-span-3">
          <h2 class="text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-white sm:text-4xl">
            Detail matters, especially at the system level.
          </h2>
          <p class="mt-6 text-base leading-relaxed text-[#1A1A1A]/70 dark:text-white/70 sm:text-lg">
            Detail-oriented and adaptable IT professional with a strong background in
            computer science, networking, and technical support. Experienced in
            troubleshooting, system configuration, and customer service, I excel at
            providing first-level support and ensuring smooth IT operations. I'm eager
            to bring my technical and communication skills to a high-performance team,
            continuously learning new technologies along the way.
          </p>

          <a
            href="/Henry_Saya_CV.pdf"
            download="Henry_Saya_CV.pdf"
            aria-label="Download Henry Saya's CV as a PDF file"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-blue-dim transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download CV
          </a>
        </div>

        <div class="lg:col-span-2">
          <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/50 dark:text-white/50">
            Core Stack
          </h3>
          <div class="mt-4 grid grid-cols-2 gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="rounded-xl border border-black/10 dark:border-white/10 bg-portfolio-gray/[0.02] dark:bg-portfolio-gray px-4 py-3 text-center font-mono text-sm text-[#1A1A1A]/80 dark:text-white/80"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div id="services" class="mt-24 scroll-mt-24">
        <p class="eyebrow mb-3">// services</p>
        <h3 class="text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-white sm:text-3xl">
          What I can do for your team
        </h3>
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <article
            v-for="service in services"
            :key="service.title"
            class="rounded-2xl border border-black/10 dark:border-white/10 bg-portfolio-gray/[0.02] dark:bg-portfolio-gray p-6"
          >
            <h4 class="text-lg font-semibold text-[#1A1A1A] dark:text-white">{{ service.title }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-[#1A1A1A]/65 dark:text-white/65">
              {{ service.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
