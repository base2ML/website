# Repository Guidelines

## Project Structure & Module Organization
- `app/` – Next.js App Router pages (`page.tsx`), layouts, and route segments.
- `components/` – Reusable UI and section components (kebab-case filenames). UI primitives under `components/ui/`.
- `lib/` – Utilities and shared config (e.g., `lib/utils.ts`, `lib/site-config.ts`).
- `hooks/` – Reusable React hooks (prefix with `use`, e.g., `hooks/use-toast.ts`).
- `public/` – Static assets (images, icons). Served at `/<filename>`.
- `styles/` and `app/globals.css` – Global Tailwind styles.
- Static export is enabled; build output goes to `out/`.

## Build, Test, and Development Commands
- `npm run dev` – Start Next.js dev server.
- `npm run build` – Build and export the static site (`out/`).
- `npm start` – Serve the production build when applicable.
- `npm run lint` – Run Next.js ESLint. Build ignores lint/type errors; fix locally before PRs.
Notes: Prefer npm (project includes `package-lock.json`). `pnpm` is present but not the default.

## Coding Style & Naming Conventions
- TypeScript, strict mode. Use `@/*` path alias to the repo root.
- 2-space indentation; Prettier default formatting is fine if used locally.
- Components: PascalCase exports, kebab-case filenames (e.g., `team-section.tsx`).
- Hooks: `useX` naming (e.g., `use-mobile.ts`).
- Tailwind CSS utility-first classes; co-locate styles in components when possible.

## Testing Guidelines
- No test framework is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests alongside files or under `__tests__/`; name `*.test.ts(x)`.
- Add `"test"` script in `package.json` and keep coverage meaningful for changed code.

## Commit & Pull Request Guidelines
- Commits: short, imperative summaries (e.g., "Fix footer layout on mobile"). Conventional Commits not required.
- PRs must include: clear description, linked issues, screenshots/GIFs for UI changes, and notes on env/deploy impacts.
- Keep PRs focused and small; update docs when behavior or commands change.

## Security & Configuration Tips
- Environment: `.env` holds non-secret config (e.g., `AWS_REGION`). Use GitHub Secrets for credentials; never commit keys.
- Deployment uses static export and AWS scripts (`deploy*.sh`, `*.yml`). Coordinate infra changes and validate `out/` locally (e.g., `npx serve out`).
