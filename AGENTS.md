# Repository Guidelines

## Project Structure & Module Organization

This is a small Next.js 15, React 19, TypeScript site for RaffiTech Solutions.
Application routes live in `app/`; `app/page.tsx` contains the main page content
and `app/layout.tsx` defines shared metadata and layout. Client-side interactive
sections are grouped in `components/client.tsx`. Global Tailwind and base CSS
live in `app/globals.css`. Publicly served images belong in `public/`, such as
`public/raffitech-logo.png`; avoid adding new runtime assets to `Asset/` unless
there is a deliberate reason to keep source-only files there.

## Build, Test, and Development Commands

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build and catches many type and rendering
  issues.
- `npm run start` serves the production build after `npm run build`.
- `npm run lint` runs the configured Next.js ESLint rules.

Use `npm install` to restore dependencies from `package-lock.json`.

## Coding Style & Naming Conventions

Use TypeScript for application code and keep `strict` compiler settings passing.
Components use PascalCase (`HeroIntro`, `Navbar`), local variables and arrays use
camelCase (`navItems`, `trustItems`), and route files follow Next.js conventions
such as `page.tsx` and `layout.tsx`. Prefer named exports for reusable UI pieces
in `components/`. Keep JSX readable with two-space indentation and Tailwind
utility classes grouped by layout, spacing, typography, and state where practical.
Use `@/*` imports for root-relative project imports.

## Testing Guidelines

No test framework is currently configured. For now, validate changes with
`npm run lint` and `npm run build`, then manually check key responsive states in
the browser, especially the mobile navigation, scroll animations, image loading,
and contact/project sections. If tests are added later, place component tests
near the component or under a clearly named `tests/` directory and use
`*.test.tsx` naming.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so no repository-specific commit
format can be inferred. Use short, imperative commit messages such as
`Update hero copy` or `Fix mobile nav spacing`. Pull requests should include a
brief summary, the reason for the change, commands run (`npm run build`,
`npm run lint`), and screenshots for visual changes.

## Security & Configuration Tips

Do not commit secrets or private contact credentials. Keep public images and SEO
metadata accurate, and update `metadataBase` in `app/layout.tsx` if the deployed
domain changes.
