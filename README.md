# Henry Saya — Portfolio

A personal portfolio site for Henry Saya, a software engineer based in Kenya
working across full stack development, systems administration, networking,
and technical support. Built to showcase projects, highlight core skills,
and give visitors a fast way to get in touch or download a CV.

**Live site:** https://henrysaya.netlify.app *(update once your final URL is set)*

## Features

- Responsive, accessible layout (semantic HTML, visible focus states,
  descriptive alt text, 4.5:1+ contrast in both themes)
- Dark/light theme that follows the OS by default, with a one-click manual
  override to the opposite look — no three-way toggle to think about
- Animated project cards with hover previews (image zoom + tech stack overlay)
- One-click CV download
- Working contact form (delivered via Web3Forms, no backend required)
- SEO-ready: Open Graph/Twitter cards, JSON-LD structured data, sitemap,
  robots.txt

## Tech stack

| Layer      | Choice                              |
|------------|--------------------------------------|
| Framework  | Vue 3 (`<script setup>`, Composition API) |
| Build tool | Vite                                 |
| Styling    | Tailwind CSS                         |
| State      | Pinia (theme store)                  |
| Routing    | Vue Router                           |
| Forms      | Web3Forms (free, no backend)         |
| Hosting    | Netlify, deployed from GitHub        |

## Project structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer
│   ├── sections/      Hero, Marquee, About, Projects, Contact
│   └── ui/             ProjectCard, ThemeToggle
├── composables/       useTheme — syncs theme with <html class="dark">
├── store/             Pinia theme store
├── router/             Single-route SPA router
└── views/               HomeView — assembles all sections
public/
├── Henry_Saya_CV.pdf   Downloadable CV
├── images/                Profile badge, project graphics, favicon
├── robots.txt, sitemap.xml, _redirects
```

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

This repo is deployed to Netlify, connected directly to the `main` branch —
every push to `main` triggers an automatic rebuild and redeploy. No manual
upload step.

Build settings on Netlify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

`public/_redirects` and `vercel.json` are included so client-side routing
(Vue Router's history mode) works correctly on refresh/deep links, on
Netlify or Vercel respectively.

## Configuration notes

- **Contact form:** delivered through Web3Forms — the access key lives in
  `src/components/sections/ContactSection.vue`. Get your own key free at
  [web3forms.com](https://web3forms.com) if you fork this.
- **Theme:** `src/store/themeStore.js` defaults to `system` and toggles to a
  locked `manual` state (the opposite of the system look at the moment of
  toggling). Click again to return to following the system.
- **SEO URLs:** `index.html`, `public/robots.txt`, and `public/sitemap.xml`
  reference the live domain directly — update all three if the domain
  changes.

## License

Personal project — feel free to use the structure as a reference for your
own portfolio, but please don't reuse Henry's content, CV, or images as-is.
