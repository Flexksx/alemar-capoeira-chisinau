{inputs, ...}: {
  perSystem = {
    system,
    pkgs,
    lib,
    config,
    ...
  }: {
    options.shellPackages = lib.mkOption {
      type = lib.types.listOf lib.types.package;
      default = [];
    };
    config = {
      _module.args.pkgs = import inputs.nixpkgs {
        inherit system;
        config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg) ["terraform"];
      };
      shellPackages = with pkgs; [just moon alejandra lefthook rumdl yamlfmt terraform];
      devShells.default = pkgs.mkShell {
        name = "alemar-capoeira-chisinau-dev-env";
        packages = config.shellPackages;
      };
    };
  };
}
