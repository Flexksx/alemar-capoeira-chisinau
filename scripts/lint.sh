#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

yaml_files=(lefthook.yml pnpm-workspace.yaml)
web_sources=(webapp/src libs/*/src)

alejandra --quiet --check .
rumdl check .
yamlfmt -lint "${yaml_files[@]}"
terraform fmt -recursive -check -diff infra
pnpm exec biome format
pnpm exec prettier --check "${web_sources[@]}"
pnpm exec eslint "${web_sources[@]}"
pnpm -r check
