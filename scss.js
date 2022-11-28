const baseRules = ["./rules/default", "./rules/scss"];

module.exports = {
  extends: [...baseRules, "stylelint-config-html"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [...baseRules, "@fylgja/stylelint-config/rules/vue"],
    },
  ],
};
