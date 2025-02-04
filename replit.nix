{ pkgs }: {
    deps = [
      pkgs.imagemagick_light
        pkgs.nodejs-18_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
    ];
}