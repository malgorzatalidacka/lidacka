# Małgorzata Lidacka — Professional Portfolio

## About

This portfolio presents the professional practice of Małgorzata Lidacka: a trainer, facilitator, educator and social and educational project manager with experience in designing and delivering learning experiences, who continues to develop her competencies in Learning Experience Design.

It brings together selected projects, practical tools, professional experience and the values that inform her approach to learning and collaboration.

## Project overview

The website is a bilingual professional portfolio available in Polish and English. It presents selected educational and social projects, practical skills and tools, professional experience and personal inspirations.

Its main sections are **Projects**, **Skills**, **Inspirations**, **About** and **Contact**. The website is a client-side React application designed to support conversations about professional collaboration.

## Tech stack

The repository uses:

- **React 18 and TypeScript** for the application and components.
- **Vite 5** for local development and production builds.
- **React Router 6** for client-side routing.
- **Tailwind CSS 3, PostCSS and Autoprefixer** for styling.
- **shadcn/ui components and Radix UI primitives** for interface elements.
- **Lucide React** for icons.
- **Embla Carousel** for testimonials.
- **React Context and localStorage** for language selection and accessibility preferences.
- **Web Speech API** for optional read-aloud functionality.
- **ESLint** for static code analysis.

The default Vite configuration uses the React SWC plugin. An alternative configuration, `.preview.config.mjs`, uses Vite’s built-in JSX transformation without the SWC plugin.

## Project structure

```text
public/                 Static files served without processing
src/
  assets/               Bundled images and cursor graphics
  components/           Shared interface and feature components
    layout/             Header, footer and page layout
    inspirations/       Components used in the Inspirations section
    ui/                 Reusable interface primitives
  data/                 Portfolio content and work-sample configuration
  hooks/                Shared React hooks, including reduced-motion support
  i18n/                 Polish and English translations and language context
  lib/                  Shared utilities
  pages/                Route-level page components
  App.tsx               Application providers and routes
  index.css             Global typography, colours and accessibility styles

ACCESSIBILITY.md        Accessibility implementation notes and outstanding checks
AGENTS.md               Repository guidance for coding assistants
vite.config.ts          Default Vite configuration
.preview.config.mjs     Alternative local development and build configuration
```

## Getting started

### Prerequisites

Install Git and a maintained Node.js LTS release with npm.

### Install dependencies

```bash
git clone https://github.com/malgorzatalidacka/lidacka.git
cd lidacka
npm ci
```

Use `package-lock.json` as the dependency reference when working with npm.

### Start the development server

```bash
npm run dev
```

The configured port is `8080`. Use the actual URL printed in the terminal; Vite may choose another port if it is occupied.

### Alternative configuration

If the default configuration fails with a native SWC binding error, use:

```bash
npm run dev -- --config .preview.config.mjs --host 127.0.0.1 --port 8082
```

This configuration has been used successfully for local portfolio previews.

### Build and check

```bash
npx tsc --noEmit -p tsconfig.app.json
npm run lint
npm run build
```

The TypeScript check and production build with the alternative configuration have passed in the development environment:

```bash
npm run build -- --config .preview.config.mjs
```

Build output is written to `dist/`. To preview an existing build:

```bash
npm run preview
```

For production hosting, configure a fallback to `index.html` so that direct visits to nested routes work correctly.

## Collaboration

**All development takes place on separate branches. Changes enter `main` through Pull Requests after review.**

1. Create a separate branch from an up-to-date `main`.
2. Implement and check the change locally.
3. Open a Pull Request describing the change and relevant validation.
4. Review the code, content, responsive layout and accessibility before merging into `main`.

Preserve both language versions when updating content. Follow the accessibility guidance in `AGENTS.md` and record relevant findings in `ACCESSIBILITY.md`.

Do not commit secrets, private source documents or local build output. Environment files and common local artefacts are excluded through `.gitignore`. Files in `public/` and imported application assets should be treated as publishable content.

## Accessibility

The website includes:

- A skip link and a main content landmark.
- Semantic headings, labelled controls and visible keyboard focus styles.
- Polish and English document-language updates.
- Text-size controls from 100% to 200%.
- A higher-contrast preference that removes shared decorative gradients.
- Support for the operating system’s reduced-motion preference and an additional motion setting.
- A pause/resume control for the homepage slideshow.
- Manually controlled testimonials.
- Alternative text for informative images and empty alternative text for decorative slideshow images.
- Optional read-aloud functionality with Polish and English language selection and a stop control.
- Persistent language and accessibility preferences stored locally in the browser.

The target is **WCAG 2.2 AA**. These features and the checks performed so far do not establish full conformance.

Outstanding work includes a comprehensive automated audit, screen-reader testing, narrow-screen and zoom checks, review of image overlays and final image descriptions, and replacement of placeholder CV files with accessible, tagged documents. Current status is documented in `ACCESSIBILITY.md`.

## Credits and licensing

This portfolio presents the professional work of **Małgorzata Lidacka**. Original text, photographs, testimonials and project materials remain the property of their respective authors and rights holders.

Some images are temporary or third-party assets. Confirm their authorship, permissions and required attribution before final publication or reuse. Third-party software and fonts remain subject to their own licences.

**No project-level licence grants general permission to reuse this project.** Public availability on GitHub does not grant permission to reuse its code, photographs or other materials.
