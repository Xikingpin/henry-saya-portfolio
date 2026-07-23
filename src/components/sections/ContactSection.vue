<script setup>
import { reactive, ref } from 'vue'

// Get a free access key at https://web3forms.com (no backend required)
// and paste it below. Emails will be delivered to sayashikanda@gmail.com.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | success | error

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/henrysaya' },
  { label: 'GitHub', href: 'https://github.com/henrysaya' },
  { label: 'Twitter', href: 'https://twitter.com/henrysaya' },
]

async function handleSubmit() {
  console.log('Contact form submission:', { ...form })

  if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    status.value = 'success'
    setTimeout(() => (status.value = 'idle'), 4000)
    Object.assign(form, { name: '', email: '', message: '' })
    return
  }

  status.value = 'sending'
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New message from ${form.name} via portfolio`,
        from_name: form.name,
        email: form.email,
        message: form.message,
        to: 'sayashikanda@gmail.com',
      }),
    })
    const result = await response.json()
    status.value = result.success ? 'success' : 'error'
  } catch (err) {
    console.error('Contact form error:', err)
    status.value = 'error'
  } finally {
    if (status.value === 'success') {
      Object.assign(form, { name: '', email: '', message: '' })
    }
    setTimeout(() => (status.value = 'idle'), 4000)
  }
}
</script>

<template>
  <section id="contact" class="py-20 sm:py-28 scroll-mt-24">
    <div class="container-page">
      <p class="eyebrow mb-3">// contact</p>
      <h2 class="text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-white sm:text-4xl">
        Let's build something reliable
      </h2>

      <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div class="lg:col-span-2 space-y-6">
          <a
            href="mailto:sayashikanda@gmail.com"
            class="flex items-center gap-3 text-[#1A1A1A]/80 dark:text-white/80 hover:text-accent-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 shrink-0" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
            </svg>
            <span class="font-mono text-sm">sayashikanda@gmail.com</span>
          </a>
          <a
            href="tel:+254795051848"
            class="flex items-center gap-3 text-[#1A1A1A]/80 dark:text-white/80 hover:text-accent-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 shrink-0" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span class="font-mono text-sm">+254 795 051 848</span>
          </a>

          <div class="flex items-center gap-3 pt-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-[#1A1A1A]/70 dark:text-white/70 hover:border-accent-blue hover:text-accent-blue transition-colors font-mono text-xs"
            >
              {{ social.label[0] }}
            </a>
          </div>
        </div>

        <form class="lg:col-span-3 space-y-5" @submit.prevent="handleSubmit" novalidate>
          <div>
            <label for="name" class="mb-1.5 block text-sm font-medium text-[#1A1A1A]/80 dark:text-white/80">Name</label>
            <input
              id="name" v-model="form.name" type="text" name="name" required autocomplete="name"
              class="w-full rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/40 dark:placeholder:text-white/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label for="email" class="mb-1.5 block text-sm font-medium text-[#1A1A1A]/80 dark:text-white/80">Email</label>
            <input
              id="email" v-model="form.email" type="email" name="email" required autocomplete="email"
              class="w-full rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/40 dark:placeholder:text-white/40"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label for="message" class="mb-1.5 block text-sm font-medium text-[#1A1A1A]/80 dark:text-white/80">Message</label>
            <textarea
              id="message" v-model="form.message" name="message" required rows="5"
              class="w-full rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/40 dark:placeholder:text-white/40"
              placeholder="Tell me about your project or role..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="status === 'sending'"
            class="inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-blue-dim transition-colors disabled:opacity-60"
          >
            {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
          </button>

          <p v-if="status === 'success'" role="status" class="font-mono text-sm text-signal">
            Message sent — I'll get back to you soon.
          </p>
          <p v-if="status === 'error'" role="alert" class="font-mono text-sm text-red-500">
            Something went wrong. Please email me directly instead.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
