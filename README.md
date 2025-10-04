# Designer vs Developer 🎨 vs 💻

This project a developer's attempt at recreating the UX Design for an animated light and dark mode toggle switch.

Original Video: https://www.tiktok.com/@verticalinstitute/video/7311654102423883016

## Demo

<div align="center">

![DvD Demo](https://github.com/NotYuSheng/designer-vs-developer/blob/main/sample-files/DEMO.gif) <br>

</div>

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and click the toggle. Watch the sun set and rise.

## Design Notes

Some design choices have been made that deviate from the original video. These modifications were implemented to enhance the visual appeal and technical implementation while maintaining the core concept of the designer vs developer meme.

## Tech Stack

- **Next.js 15.5.4** - React framework with App Router and Server Components
- **React 19.1.0** - Latest version with improved performance
- **TypeScript** - Strict type checking for better code quality
- **Tailwind CSS v4** - Utility-first CSS framework
- **Turbopack** - High-performance build tool

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── components/
    └── ToggleButton.tsx # The star of the show
```

## Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Run production server
npm run lint   # Run ESLint
```
