module.exports = {
  extends: "@fylgja/stylelint-config",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "plugin", // LESS specific
          "for",
          "each",
          "if",
          "else",
          "mixin",
          "/^mixin-/",
          "include",
          "screen",
        ],
        severity: "warning",
      },
    ],
    "max-nesting-depth": [6, { severity: "warning" }],
    "media-feature-name-no-unknown": null,
    "no-extra-semicolons": null,
    "no-descending-specificity": null,
    "selector-max-compound-selectors": null,
    "selector-max-id": 1,
    "selector-max-class": 5,
    "selector-max-type": 4,
  },
};
