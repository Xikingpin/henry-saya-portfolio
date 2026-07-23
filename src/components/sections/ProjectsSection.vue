<script setup>
import ProjectCard from '../ui/ProjectCard.vue'

const projects = [
  {
    title: 'Courier Management System',
    description:
      'A web application to track and manage delivery logistics, built end-to-end with a relational backend.',
    image: '/images/project-courier.svg',
    alt: 'Abstract illustration representing the Courier Management System, a PHP and SQL logistics web app',
    stack: ['PHP', 'HTML', 'CSS', 'SQL'],
    link: 'https://github.com/HenrySaya/Shipment-system',
    linkLabel: 'GitHub',
  },
  {
    title: 'Printf Project',
    description:
      'A from-scratch recreation of the C standard library printf function, handling format specifiers as part of a team-based project.',
    image: '/images/project-printf.svg',
    alt: 'Abstract illustration representing the Printf Project, a C language function recreation',
    stack: ['C', 'Team Project'],
    link: 'https://github.com/HenrySaya/printf',
    linkLabel: 'GitHub',
  },
  {
    title: 'Super Simple Shell',
    description:
      'A Unix-style shell application in C that parses user input and executes commands, built from first principles.',
    image: '/images/project-shell.svg',
    alt: 'Abstract illustration representing the Super Simple Shell, a C language command-line shell',
    stack: ['C', 'Systems Programming'],
    link: 'https://github.com/HenrySaya/simple_shell',
    linkLabel: 'GitHub',
  },
  {
    title: 'Map Dashboard',
    description:
      'A geospatial data visualization tool with interactive maps, filters, and tooltips, integrating external APIs with a PostGIS-backed PostgreSQL database. Built as part of Program Earth, where it earned me the Fullstack Open Source Fellow badge.',
    image: '/images/project-map.svg',
    alt: 'Abstract illustration representing the Map Dashboard, a Vue.js geospatial visualization tool with PostGIS',
    stack: ['Vue.js', 'Vuetify', 'REST APIs', 'PostGIS'],
    link: 'https://programearth.org/land-sites',
    linkLabel: 'Live Demo',
  },
]
</script>

<template>
  <section id="projects" class="py-20 sm:py-28 scroll-mt-24 bg-portfolio-gray/[0.015] dark:bg-black/20">
    <div class="container-page">
      <p class="eyebrow mb-3">// portfolio</p>
      <h2 class="text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-white sm:text-4xl">
        Selected projects
      </h2>
      <p class="mt-4 max-w-2xl text-base text-[#1A1A1A]/65 dark:text-white/65">
        From low-level C programs to full-stack, data-driven applications — a look at
        the range of problems I like solving.
      </p>

      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
      </div>
    </div>
  </section>
</template>
