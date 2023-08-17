module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html",
    "@fylgja/stylelint-config/rules/default",
    "./rules/default",
  ],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "@fylgja/stylelint-config/rules/default",
        "@fylgja/stylelint-config/rules/scss",
        "./rules/snowdog",
        "./rules/scss",
      ],
    },
    {
      files: ["*.less", "**/*.less"],
      extends: ["./rules/luma"],
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
