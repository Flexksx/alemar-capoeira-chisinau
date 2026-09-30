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
- `libs/ui/src/routes/+page.svelte` — showcase page that shows every element in light and dark themes (`just start ui`)
- `webapp/src/routes/` — `/` (landing), `/songs` (redirects to first song id), `/songs/[id]`, `/songs/export` (PDF)
- `webapp/src/lib/i18n.ts` — RO/RU/EN translations via `LanguageStore` (Svelte 5 runes)
- `libs/songs/` (`@alemar/songs`) — songs domain: types, song data (`src/songs.json`), pure helpers, search.
  Plain TypeScript, no Svelte. Use `type` and `as const` lists, not `enum` or `interface`.
- `webapp/src/lib/data/events.json` — events content data
- `webapp/src/routes/layout.css` — imports Tailwind and `@alemar/ui/theme.css`, then adds site-specific utilities

## Entry points

All developer actions go through `just`. `just` calls moon, and moon runs the tasks, keeps the graph and caches
the results. Never write `moon run` in a document, a script or a hook.

- `just start webapp` — run the webapp dev server
- `just start ui` — open the design system showcase
- `just build webapp` — production build
- `just format` / `just lint` — format or check every unit. moon runs only the units that changed. Add `-f` to
  skip the cache.
- `just sync` — rebuild the generated per-unit recipes (`.just/*/units.just`). Run it after you add a unit.
- `just infra plan` / `just infra apply` — Terraform for the Cloudflare Pages project + `capoeira.md` domain

Run `just --list --list-submodules` to see everything currently wired up.

## Dev environment

`direnv allow` (or `nix develop`) loads `just`, `moon`, `alejandra`, `lefthook`, `rumdl`, `yamlfmt`, `terraform`, and the
pinned Node/pnpm toolchain (`nodejs_26`). Run `lefthook install` once after cloning to activate the pre-commit
hooks (pre-commit runs `just format`, then `just lint`). `terraform` is unfree (BSL 1.1) — `nix/devtools.nix` scopes
`allowUnfreePredicate` to just that package rather than disabling the unfree check repo-wide.

## moon wiring

- `.moon/workspace.yml` — finds the units: `webapp/moon.yml` and `libs/*/moon.yml`. The root `moon.yml` is the
  `repo` project. It holds the Nix, Markdown, YAML and Terraform checks and the `install` task.
- `.moon/tasks/typescript.yml` — the tasks that every unit tagged `typescript` inherits. Each task calls the
  `package.json` script of the same name (`format`, `lint`, `test`, `build`, `dev`).
- A unit `moon.yml` holds only metadata (`language`, `layer`, `tags`, `dependsOn`). The libs exclude the
  inherited tasks that they have no script for.
- Each package `format`/`lint` script calls the root Biome, Prettier and ESLint. Prettier needs
  `--ignore-path ../../.prettierignore`, because it reads the ignore file only from its working directory.
- Every task sets `toolchains: 'system'`, so moon installs nothing. Nix supplies every tool.

## Infra and deployment

- `infra/` — Terraform for the Cloudflare Pages project and the `capoeira.md`/`www.capoeira.md` custom
  domains + DNS records. State lives in a Cloudflare R2 bucket (S3-compatible backend), not locally.
  These resources were originally created by hand in the dashboard, so they were `terraform import`ed
  rather than created fresh — check `terraform plan` reports no changes before trusting the config.
- `.github/workflows/terraform-plan.yml` — runs `terraform plan` on PRs touching `infra/**`. `apply` is
  intentionally not automated; run it locally after reviewing the plan.
- `.github/workflows/ci.yml` — runs `just lint`, then `just build all`, on every PR and every push to `main`.
  On `main`, it deploys the build output with `wrangler pages deploy`. This is independent of Terraform.
  Terraform manages only the Pages project and the domain, never the deployed content.

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
