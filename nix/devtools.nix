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
      # terraform is BSL-licensed (unfree) since HashiCorp's 2023 license change;
      # scope allowUnfree to just this package rather than the whole devshell.
      _module.args.pkgs = import inputs.nixpkgs {
        inherit system;
        config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg) ["terraform"];
      };
      shellPackages = with pkgs; [just alejandra lefthook rumdl yamlfmt terraform];
      devShells.default = pkgs.mkShell {
        name = "alemar-capoeira-chisinau-dev-env";
        packages = config.shellPackages;
      };
    };
  };
}
