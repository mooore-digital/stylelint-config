module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html",
    "@fylgja/stylelint-config/rules/default",
    "./rules/default",
    "./rules/order",
  ],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "@fylgja/stylelint-config/rules/default",
        "@fylgja/stylelint-config/rules/scss",
      ],
    },
    {
      files: ["*.less", "**/*.less"],
      extends: ["./rules/luma"],
    },
    {
      files: ["*.vue", "**/*.vue"],
      extends: ["@fylgja/stylelint-config/rules/vue"],
    },
    {
      files: ["*.svelte", "**/*.svelte"],
      extends: ["@fylgja/stylelint-config/rules/svelte"],
    },
    {
      files: [
        "tailwind*.{css,scss}",
        "tailwind/*.{css,scss}",
        "tailwind/**/*.{css,scss}",
        "**/tailwind*.{css,scss}",
        "**/tailwind/*.{css,scss}",
        "**/tailwind/**/*.{css,scss}",
      ],
      extends: ["@fylgja/stylelint-config/rules/tailwind"],
    },
  ],
};
