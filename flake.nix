{
  description = "Development environment for Voisso - TypeScript frontend";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };
      in
      {
        devShells.default = pkgs.mkShell {
          name = "voisso-ts-env";

          packages = with pkgs; [
            # Node.js / TypeScript / Frontend
            nodejs_24
            corepack # Provides pnpm and yarn
            pnpm
            nodePackages.typescript
            nodePackages.typescript-language-server
            nodePackages.eslint
            nodePackages.prettier

            # Common build tools & system libraries
            openssl
            pkg-config
            zlib
          ];

          shellHook = ''
            # Enable pnpm via corepack
            corepack enable

            echo "🚀 Voisso TypeScript Development Environment"
            echo "Node.js: $(node --version)"
            echo "pnpm:    $(pnpm --version)"
            echo "✨ Use 'pnpm install' to get started."
          '';
        };
      }
    );
}
