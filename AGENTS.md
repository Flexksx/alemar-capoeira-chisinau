# AGENTS.md

## Project

Alemar Capoeira Chișinău — static marketing + song-reference site for a Chișinău capoeira group.
SvelteKit 5 (runes) + Tailwind 4 + TypeScript, prerendered with `adapter-static`, deployed to Cloudflare Pages.

## Structure

Single deployable unit: `webapp/`. No `apps/`, `libs/`, or `moon` — nothing else depends on it.

- `webapp/src/routes/` — `/` (landing), `/songs` (redirects to first song id), `/songs/[id]`, `/songs/export` (PDF)
- `webapp/src/lib/i18n.ts` — RO/RU/EN translations via `LanguageStore` (Svelte 5 runes)
- `webapp/src/lib/data/songs.json`, `webapp/src/lib/data/events.json` — content data
- `webapp/src/routes/layout.css` — global dark theme, Bebas Neue + DM Serif Display fonts

## Entry points

All developer actions go through `just`:

- `just dev` — run the webapp dev server
- `just build webapp` — production build
- `just format all` / `just lint all` — repo-wide formatting/linting (Nix, Markdown, YAML, webapp, Terraform)
- `just format webapp` / `just lint webapp` — webapp only (Prettier / ESLint)
- `just infra plan` / `just infra apply` — Terraform for the Cloudflare Pages project + `capoeira.md` domain

Run `just --list --list-submodules` to see everything currently wired up.

## Dev environment

`direnv allow` (or `nix develop`) loads `just`, `alejandra`, `lefthook`, `rumdl`, `yamlfmt`, `terraform`, and the
pinned Node/pnpm toolchain (`nodejs_26`). Run `lefthook install` once after cloning to activate the pre-commit
hooks (pre-commit runs its checks in parallel). `terraform` is unfree (BSL 1.1) — `nix/devtools.nix` scopes
`allowUnfreePredicate` to just that package rather than disabling the unfree check repo-wide.

## Infra and deployment

- `infra/` — Terraform for the Cloudflare Pages project and the `capoeira.md`/`www.capoeira.md` custom
  domains + DNS records. State lives in a Cloudflare R2 bucket (S3-compatible backend), not locally.
  These resources were originally created by hand in the dashboard, so they were `terraform import`ed
  rather than created fresh — check `terraform plan` reports no changes before trusting the config.
- `.github/workflows/terraform-plan.yml` — runs `terraform plan` on PRs touching `infra/**`. `apply` is
  intentionally not automated; run it locally after reviewing the plan.
- `.github/workflows/deploy.yml` — builds and deploys the webapp (`wrangler pages deploy`) on every push
  to `main` that touches `webapp/**`. This is independent of Terraform — Terraform only manages the Pages
  project/domain scaffolding, never the deployed content.

## Conventions an agent can't derive from the code

- Import Lucide icons via their deep path (`@lucide/svelte/icons/foo`), never the barrel export —
  the barrel import slows the build roughly 2-3x.
- `/songs/[id]` server-renders exactly one song's `SongCard` per request (one `<h1>`/canonical per
  URL); the full swipe carousel across all songs only mounts client-side after `onMount`. The
  sidebar links to other songs via real `<a href="/songs/{id}">` tags (with `preventDefault` to
  keep SPA behavior), not `goto()`-only navigation. Both were fixes for Google Search Console
  flagging song pages as "Discovered – currently not indexed" (duplicate bodies + orphaned URLs).
  Don't revert to always-rendering the full carousel — it reintroduces duplicate content.
