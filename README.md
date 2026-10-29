# Toloba Sports Consult

Website for Toloba Sports Consult, a football scouting, consulting and mentoring consultancy based in Ghana. It is a single-page React app built with Vite and served as static files.

## Requirements

- Node.js 20.19 or newer (the Docker image uses `node:20-alpine`)
- npm

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the EmailJS values
npm run dev            # http://localhost:5173
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server             |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint over `src/`                |

## Environment variables

The contact form sends mail through [EmailJS](https://www.emailjs.com/). The three values below are read by Vite at build time and end up in the browser bundle, so they must be public EmailJS keys, never secrets.

| Variable                 | Purpose                    |
| ------------------------ | -------------------------- |
| `VITE_YOUR_SERVICE_ID`   | EmailJS service ID         |
| `VITE_YOUR_TEMPLATE_ID`  | EmailJS template ID        |
| `VITE_YOUR_PUBLIC_KEY`   | EmailJS public key         |

Copy `.env.example` to `.env` for local work. If any of them is missing, the form shows a message asking visitors to email directly instead of failing silently. Change them and you must rebuild.

## Project structure

```
src/
  features/   page content and page-specific components, one folder per page
  pages/      route components (mostly thin wrappers)
  ui/         shared components: header, footer, buttons, reveal-on-scroll, ...
  hooks/      shared hooks
  styles/     global styles and design tokens (CSS variables)
public/       static files served as-is (favicons, manifest, robots.txt, optimized images)
source-assets/  original full-size images, not served
```

- **Styling** uses styled-components. Colours, type scale, spacing, radii and motion values are CSS variables defined in `src/styles/GlobalStyles.js`.
- **Copy** lives next to each page in a data file (for example `src/features/aboutus/aboutContent.js`, `src/features/home/homeContent.js`), so text can be edited without touching the layout. Page titles and meta descriptions are in `src/ui/pageMeta.js`; navigation is in `src/ui/navLinks.js`; contact details are in `src/ui/siteInfo.js`.
- **Routes** are declared in `src/App.jsx`. Unknown URLs show a 404 page.
- `/faq` and `/testimonial` show a "coming soon" page and are marked `noindex` until real content exists.

## Images

Pages use resized WebP copies from `public/optimized/`. The originals are in `source-assets/` (kept in the repo, excluded from the Docker image). To make a new optimized copy:

```bash
npx sharp-cli -i source-assets/images/photo.jpeg -o public/optimized/new-name-800.webp -f webp -q 74 resize 800
```

Then reference it by base name in the relevant data file. Give every image descriptive alt text.

## Deployment

The app needs a host that serves `index.html` for unknown paths, because routing happens in the browser.

**Docker (nginx)**

```bash
docker build \
  --build-arg VITE_YOUR_SERVICE_ID=... \
  --build-arg VITE_YOUR_TEMPLATE_ID=... \
  --build-arg VITE_YOUR_PUBLIC_KEY=... \
  -t toloba-sports-consult .
docker run -p 8080:80 toloba-sports-consult
```

The `Dockerfile` builds with Node 20 and serves `dist/` with nginx. `nginx.conf` caches `/assets/` for a year and falls back to `index.html`.

**Netlify** and **Apache** configs are also included (`netlify.toml` redirects everything to `index.html`; `.htaccess` does the same with mod_rewrite). Use whichever matches the host.

### Not set yet

The production domain is not configured in the project. Once it is known, add a canonical link, a `sitemap.xml` (and a `Sitemap:` line in `public/robots.txt`), and absolute URLs for `og:image`, `twitter:image` and `og:url` in `index.html`.
