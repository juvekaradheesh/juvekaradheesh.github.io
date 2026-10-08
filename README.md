# Adheesh Juvekar's website

Personal academic website built with Astro, Tailwind CSS, and DaisyUI. Based on [Astro Academia](https://github.com/maiobarbero/astro_academia).

## Local development

Use Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Editing content

- `src/settings.ts`: profile, research statement, social links, and site settings.
- `src/data/cv.ts`: publications, education, and experience shared across the site.
- `src/pages/index.astro`: homepage.
- `src/pages/papers.astro`: papers with thumbnails. Add an `image` path to a publication to include it here; Home and CV show the full list.
- `src/pages/cv.astro`: CV layout, teaching, and service.
- `public/papers/`: publication thumbnails.
- `public/logos/`: institution and company logos.

## Build and deployment

```sh
npm run build
npm run preview
```

Stop the development server before building in the same checkout: Astro shares generated files between the two commands. If generated files go missing, run `npm run astro -- sync` and restart the development server.

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`. Dependencies (`node_modules/`), build output (`dist/`), and Astro caches (`.astro/`) are generated locally and are not tracked in Git. Keep `package-lock.json` committed for reproducible installs.

Local reference documents and legacy files are preserved in `.local/archive/`, which is ignored by Git and excluded from deployment.
