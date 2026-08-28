# Aaroo Studios

Website for Aaroo Studios, a modern makeup atelier offering bridal, occasion,
editorial, and campaign artistry.

## Development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal. The primary page lives in
`app/page.tsx`, with global styling in `app/globals.css`.

## Checks

```bash
npm test
npm run lint
npm run build:pages
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-pages.yml`, which builds and
publishes the static site to GitHub Pages under the `/Aaroo_studios` project
path.
