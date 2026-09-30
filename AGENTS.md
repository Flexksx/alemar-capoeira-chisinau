# AGENTS.md

## Project

Alemar Capoeira Chișinău — static marketing + song-reference site for a Chișinău capoeira group.
SvelteKit 5 (runes) + Tailwind 4 + TypeScript, prerendered with `adapter-static`, deployed to Cloudflare Pages.

## Structure

pnpm workspace (root `pnpm-workspace.yaml`, one root `pnpm-lock.yaml`). Shared versions live in its `catalog:`.
The only deployable unit is `webapp/`. `libs/ui/` is the design system that the webapp imports.

- `libs/ui/` (`@alemar/ui`) — design system: bits-ui/shadcn-svelte components, `cn()`, theme tokens and fonts
  (`src/lib/theme.css`). Import components by subpath: `@alemar/ui/button`, `@alemar/ui/carousel`.
  The package exports its source directly, so it has no build step.
- `libs/ui/src/routes/+page.svelte` — showcase page that shows every element in light and dark themes (`just showcase`)
- `webapp/src/routes/` — `/` (landing), `/songs` (redirects to first song id), `/songs/[id]`, `/songs/export` (PDF)
- `webapp/src/lib/i18n.ts` — RO/RU/EN translations via `LanguageStore` (Svelte 5 runes)
- `webapp/src/lib/data/songs.json`, `webapp/src/lib/data/events.json` — content data
- `webapp/src/routes/layout.css` — imports Tailwind and `@alemar/ui/theme.css`, then adds site-specific utilities

## Entry points

All developer actions go through `just`:

- `just dev` — run the webapp dev server
- `just showcase` — open the design system showcase
- `just build webapp` — production build
- `just format` / `just lint` — format or check the whole repo (Nix, Markdown, YAML, Terraform, TS, Svelte).
  Both call the scripts in `scripts/`. `lint` also runs `svelte-check` in every package.
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
- Put reusable, content-free UI in `libs/ui`. The webapp only arranges these components with site content.
  Add each new element to the showcase page.
- Inside `libs/ui/src/lib`, use relative imports, never `$lib`. In the webapp, `$lib` resolves to the webapp.
- `webapp/src/routes/layout.css` has `@source '../../../libs/ui/src/lib'`. Without it, Tailwind does not generate the
  classes that only the library uses.
- Formatting: Biome formats `.ts` files, and Prettier formats `.svelte`/CSS/JSON. ESLint lints both. All configs are
  at the repo root.
- TypeScript: `typescript` is 6.0 because typescript-eslint and the svelte-check API refuse TS 7. TS 7 is installed
  as `@typescript/native`. `libs/ui` runs `svelte-check --tsgo` (TS 7). The webapp cannot use `--tsgo`, because tsgo
  does not transpile `.svelte` files outside the checked package (the linked `libs/ui` source).
- Put a component or helper that only one route uses next to that route's `+page.svelte`, for example
  `routes/songs/[id]/SongCard.svelte`. Use `$lib` only for code that more than one route uses. Put reusable UI
  in `libs/ui`.
