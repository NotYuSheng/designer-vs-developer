# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "Designer vs Developer" that demonstrates a toggle button component with visual day/night theme switching. The project uses:
- Next.js 15.5.4 with App Router
- React 19.1.0
- TypeScript (strict mode)
- Tailwind CSS v4
- Turbopack for builds

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server runs on http://localhost:3000

## Code Structure

- **Next.js App Router**: Uses the `src/app/` directory structure
  - [src/app/layout.tsx](src/app/layout.tsx) - Root layout with Geist fonts
  - [src/app/page.tsx](src/app/page.tsx) - Home page (server component)

- **Components**: Located in `src/components/`
  - Client components must use `'use client'` directive
  - Path alias `@/*` maps to `./src/*` (configured in tsconfig.json)

- **Styling**: Tailwind CSS v4 with PostCSS
  - Global styles in [src/app/globals.css](src/app/globals.css)
  - Uses utility-first approach with inline className attributes

## Architecture Notes

- **Client vs Server Components**: By default, components in App Router are Server Components. Components using hooks (useState, useEffect, etc.) or browser APIs must include `'use client'` at the top
- **Import Paths**: Use the `@/` alias for imports from the src directory (e.g., `import ToggleButton from '@/components/ToggleButton'`)
- **TypeScript Configuration**: Strict mode enabled with ES2017 target
