{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-25.05";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      overlays = [ ];
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system overlays; };
      editorHelpers = with pkgs; [
        # Editor helpers
        nil # for .nix linting
        nixfmt-rfc-style # for .nix formating
      ];
    in
    {
      devShells.${system} = {
        # Shell for developing the frontend laravel server
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs

            editorHelpers
            tailwindcss-language-server # for tailwind inside blade
            typescript-language-server # this is also the javascript server
          ];
        };
      };
    };
}
