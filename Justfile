mod build '.just/build'
mod format '.just/format'
mod lint '.just/lint'
mod test '.just/test'

[private]
default:
    just --list --list-submodules

# Run the webapp dev server
dev:
    pnpm -C webapp dev
