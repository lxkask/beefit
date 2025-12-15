# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BeeFIT is a production fitness center website built as a graduation project for a Prague-based client. The site uses SvelteKit with Sanity.io headless CMS for content management. The project emphasizes modern web standards, SEO optimization, accessibility, and responsive design.

## Development Commands

### Frontend (Main Project)
- `npm run dev` - Start development server
- `npm run build` - Build for production (static site, outputs to `/build`)
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run lint` - Check code style with Prettier and ESLint
- `npm run format` - Format code with Prettier

### Sanity Backend (CMS)
The Sanity backend is located in `sanity-backend/` directory. To work with the CMS:
- Navigate to `sanity-backend/` directory first
- Run `npm run dev` to start Sanity Studio (default: http://localhost:3333)
- Schema types are defined in `sanity-backend/schemaTypes/`

## Architecture

### Tech Stack
- **Framework**: SvelteKit 2 with Svelte 5 (uses new runes API: `$props()`, `$state()`)
- **Styling**: TailwindCSS with custom color scheme and fonts (Oswald for headings, Roboto for body)
- **UI Components**: Melt UI for accessible, headless components
- **CMS**: Sanity.io (project ID: `m5f3047g`, dataset: `production`)
- **Build**: Vite with `@sveltejs/adapter-static` for static site generation

### Project Structure
- **`src/routes/`** - SvelteKit file-based routing
  - `+layout.svelte` - Root layout with Navbar and Footer
  - `+page.svelte` - Homepage
  - Route pages: `/cenik`, `/posilovna`, `/treneri`, `/rozvrh`, `/kontakt`

- **`src/lib/`** - Shared code and assets
  - `components/` - Reusable Svelte components (Navbar, Footer, ReviewsCarousel)
  - `sanityClient.ts` - Configured Sanity client instance
  - `types/sanity.d.ts` - TypeScript types for Sanity document schemas
  - `images/` & `videos/` - Static media assets (uses responsive images with multiple sizes)

- **`sanity-backend/`** - Sanity CMS configuration
  - `schemaTypes/` - Content model definitions
    - `hiring.ts` - Job posting/hiring banner
    - `schedule.ts` - Group sessions schedule
    - `priceTable.ts` - Pricing information
    - `trainer.ts` - Trainer profiles
    - `paymentMethods.ts` - Accepted payment methods

### Sanity Integration
The frontend fetches content from Sanity using the `@sanity/client` library. The client is configured in `src/lib/sanityClient.ts` with `useCdn: false` for fresh content. Content types are defined in TypeScript interfaces matching the Sanity schemas.

### Styling Conventions
- Custom TailwindCSS theme colors: `black` (#121212), `grey` (#1E1E1E), `yellow` (#FFC107), `yellow_hover` (#FFD54F)
- Font families: `font-heading` (Oswald) and `font-body` (Roboto)
- Responsive images use WebP format with multiple size variants (Small/Medium/Large/Full)
- Videos include both WebM and MP4 formats for browser compatibility

### Static Site Generation
The project uses `@sveltejs/adapter-static` configured to output to `/build` with a fallback to `index.html` for SPA-style routing. This enables deployment to static hosts like Netlify and Český hosting.

## Key Patterns

### Svelte 5 Runes
This project uses Svelte 5, which has different syntax than Svelte 4:
- Props: `let { children } = $props()` instead of `export let`
- State: `let count = $state(0)` instead of `let count = 0`
- Rendering children: `{@render children()}` instead of `<slot />`

### Responsive Media
Images and videos follow a consistent pattern with multiple breakpoint-optimized versions. Example:
```svelte
import equipment from '../lib/images/equipment.webp';
import equipmentSmall from '../lib/images/equipmentSmall.webp';
import equipmentMedium from '../lib/images/equipmentMedium.webp';
import equipmentLarge from '../lib/images/equipmentLarge.webp';
```

### Melt UI Usage
Accessible UI components (dialogs, dropdowns, etc.) are built with Melt UI. The library provides headless, accessible primitives that are styled with Tailwind.

## Deployment

The site is deployed to:
- **Netlify**: [tubular-stardust-fbff63.netlify.app](https://tubular-stardust-fbff63.netlify.app/)
- **Test domain**: [fit-fat.cz](http://fit-fat.cz/)
- **Production**: Client's hosting (Český hosting)

Deployment uses the static build output from `npm run build`.

## SEO & Performance
- Meta descriptions and titles defined in `src/app.html`
- Google Fonts preconnect for performance
- Preloading critical images
- Lighthouse and WAVE tested for accessibility and SEO
- Responsive design across all devices
