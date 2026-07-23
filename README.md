# Henry Saya — Portfolio

Vue 3 + Vite + Tailwind CSS personal portfolio, built from the PRD.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Things to swap before you ship this

1. **Photo** — done. `public/images/profile.png` is your real Program Earth
   Fullstack Fellow badge, wired into the hero circle. `profile.svg` (the old
   monogram placeholder) is unused now and safe to delete.
2. **Project screenshots** — `public/images/project-*.svg` are still abstract
   placeholders (I don't have real screenshots of your projects). Replace them
   with real screenshots using the same filenames, or update the `image` paths
   in `src/components/sections/ProjectsSection.vue`.
3. **Project links** — done. Courier system, Printf, and Simple Shell link to
   their GitHub repos; Map Dashboard links to `programearth.org/land-sites`.
4. **Contact form email delivery** — the form currently just logs to console
   and shows a success message. To actually send you an email:
   - Go to https://web3forms.com, enter `sayashikanda@gmail.com`, and grab
     your free Access Key (no signup required).
   - Paste it into `WEB3FORMS_ACCESS_KEY` in
     `src/components/sections/ContactSection.vue`.
5. **Social links** — LinkedIn/GitHub/Twitter URLs in `ContactSection.vue` are
   still placeholders (`henrysaya`) — update them to your real profiles.
6. **CV** — `public/Henry_Saya_CV.pdf` is your actual uploaded CV, already
   wired to the "Download CV" button. Replace this file whenever your CV
   updates (keep the same filename).
7. **"33+ Projects Contributed" stat** — in the hero, based on your open
   source fellowship work. Update the number in `HeroSection.vue` if it
   changes.
8. **SEO placeholder domain** — `index.html`, `public/robots.txt`, and
   `public/sitemap.xml` all currently point to `https://henrysaya.netlify.app/`.
   Once you know your final live URL (after deploying, or after connecting a
   custom domain), search-and-replace that placeholder with the real one in
   all three files, then redeploy.

## SEO

The site ships with:
- A descriptive `<title>` and meta description targeting "software engineer",
  "full stack developer", and "Kenya" search terms.
- Open Graph and Twitter Card tags so links shared on LinkedIn/Twitter/Slack
  show a proper preview card (title, description, image).
- JSON-LD structured data (`Person` schema) so search engines can understand
  who you are, not just what the page says.
- `robots.txt` and `sitemap.xml` so search engines can find and index the
  page.
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and descriptive
  `alt` text throughout, which also helps search engines parse the page
  structure.

This is a single-page site, so SEO here mostly means: one page, well
described, fast, and indexable — there's no multi-page sitemap needed unless
you add more routes later.

## Notes

- Dark mode is the default and follows system preference; manual toggle is in
  the navbar and persists via `localStorage`.
- Everything is keyboard-navigable with visible focus rings, semantic HTML
  landmarks, and descriptive `alt` text on every image.
- Colors/type are defined in `tailwind.config.js` — `accent-blue` is the
  primary CTA color, `signal` (teal-green) is used for status indicators.
