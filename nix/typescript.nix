# nodejs_26 pins the node major; pnpm's own version is pinned in package.json's
# "packageManager" field and fetched via corepack.
{...}: {
  perSystem = {
    pkgs,
    config,
    ...
  }: {
    config.shellPackages = with pkgs; [nodejs_26 pnpm];
  };
}
