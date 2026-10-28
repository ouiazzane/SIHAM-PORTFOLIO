# Siham Ouiazzane Portfolio

A responsive portfolio website for Siham Ouiazzane, built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This portfolio presents Siham’s profile, academic background, skills, project work, and professional experience. It is designed to be lightweight, accessible, and easy to deploy as a static site.

## Prerequisites

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

Then open http://localhost:4173.

## Production build

```bash
npm run build
```

Preview locally:

```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

## Update personal details

Edit the data in `src/App.tsx` to update:

- personal details
- project descriptions
- experience timeline
- education history
- profile photo in `public/siham-ouiazzane.png`
- links to GitHub and LinkedIn
- CV download link

## CV asset

The CV PDF is stored in `public/CV_Siham_Ouiazzane.pdf`.

## Deployment

This project is suitable for static hosting such as Vercel or GitHub Pages.

### Vercel

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Vite build settings.
4. Deploy the project.

### GitHub Pages

1. Build the project with `npm run build`.
2. Upload the `dist` contents to GitHub Pages or use a static hosting provider.

## Notes

- The portfolio uses a safe temporary canonical strategy with the project root; update the site metadata when the final public domain is known.
- Project links are included only for verified public repositories.
- No fake metrics, testimonials, or fabricated project deployment links are included.
