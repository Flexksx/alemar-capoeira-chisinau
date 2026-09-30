#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

yaml_files=(lefthook.yml pnpm-workspace.yaml)
web_sources=(webapp/src libs/*/src)

alejandra --quiet .
rumdl check --fix .
yamlfmt "${yaml_files[@]}"
terraform fmt -recursive infra
pnpm exec biome format --write
pnpm exec prettier --write "${web_sources[@]}"
