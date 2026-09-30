mod build '.just/build'
mod infra '.just/infra'
mod test '.just/test'

[private]
default:
    just --list --list-submodules

# Run the webapp dev server
dev:
    pnpm -C webapp dev

# Open the design system showcase
showcase:
    pnpm -C libs/ui showcase

# Run every formatter
format:
    scripts/format.sh

# Run every linter and format check
lint:
    scripts/lint.sh
