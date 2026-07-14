# Natural Monolith Wealth Flow

A standalone React + Vite interactive web presentation, prepared for editing in Visual Studio Code.

## Open in VS Code

1. Extract this ZIP into a new folder.
2. Open Visual Studio Code.
3. Select **File > Open Folder** and choose the extracted folder.
4. Open the VS Code terminal with **Terminal > New Terminal**.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local address shown in the terminal, normally:

```text
http://localhost:5173
```

## Controls

- Use the right/down arrow or spacebar to move forward.
- Use the left/up arrow to move backward.
- Use the navigation controls on the right side of the page.

## Quality checks

```bash
npm run build
npm run typecheck
npm run lint
```

## Production preview

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The included `vercel.json` supports React Router fallback routing.

- Build command: `npm run build`
- Output directory: `dist`

## Project structure

- `src/pages/Tour.jsx` — presentation controller and keyboard navigation
- `src/components/tour/slides/` — individual presentation sections
- `src/components/tour/` — progress and side navigation
- `src/index.css` — global styling and design tokens
- `public/` — local static assets, when added

## Base44 note

This version no longer requires Base44 authentication to display the website. Legacy Base44 files remain in the source folder for reference, but they are not loaded by the standalone app.
