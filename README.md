# My Portfolio

A modern, animated personal portfolio built with Next.js App Router, React, and TypeScript.

The site presents professional experience, education, skills, projects, certifications, and contact information from a single structured data source.

## Overview

### Responsibilities

- Render a one-page portfolio with section-based navigation.
- Support light and dark theme switching.
- Animate key UI areas for smoother visual storytelling.
- Keep profile content centralized in one typed data module.

### Integration

- Content source: local TypeScript object in `src/data/portfolio.ts`.
- UI sections: reusable components under `src/components/sections`.
- Theme engine: `next-themes` via provider in `src/components/ThemeProvider.tsx`.
- Icons: `lucide-react` plus Devicon stylesheet loaded in `src/app/layout.tsx`.

## Resources

- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
- Devicon catalog: https://devicon.dev/

## Architecture

### Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- next-themes

### Project Structure

```text
src/
	app/
		layout.tsx        # Root layout + global providers + external icon stylesheet
		page.tsx          # Home page composition (section order)
		globals.css       # Theme variables and global styles
	components/
		Navbar.tsx
		ThemeProvider.tsx
		sections/
			hero.tsx
			experience.tsx
			education.tsx
			skill.tsx
			project.tsx
			certification.tsx
			contact.tsx
			footer.tsx
	data/
		portfolio.ts      # Main editable content source
	types/
		index.ts          # Shared data interfaces
```

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+ (or equivalent package manager)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Create production build.
- `npm run start`: Run the production server.
- `npm run lint`: Run ESLint checks.

## Content Customization

Most content updates can be done without touching component logic.

- Profile data: edit `src/data/portfolio.ts`
- Data shape contracts: edit `src/types/index.ts`
- Section order on homepage: edit `src/app/page.tsx`
- Global styles and theme tokens: edit `src/app/globals.css`

## Theming

Theme switching uses `next-themes` and a custom `data-theme` attribute.

- Light and dark CSS variables are defined in `src/app/globals.css`.
- Theme toggle UI is implemented in `src/components/Navbar.tsx`.
- Provider setup is in `src/components/ThemeProvider.tsx` and wired from `src/app/layout.tsx`.

## Build and Production Run

```bash
npm run build
npm run start
```

## Deployment

You can deploy this app on any Next.js-compatible platform.

- Vercel (recommended for fastest setup)
- Netlify
- Self-hosted Node.js environment

For Vercel deployment details, see: https://nextjs.org/docs/app/building-your-application/deploying

## Notes

- No automated test suite is currently configured in this repository.
- The `public/icons` folder is currently empty; icon rendering relies on `lucide-react` and Devicon CDN.
