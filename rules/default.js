// TODO migrate warnings to Snowdog and Luma versions
// TODO migrate at-rule-no-unknown to each syntax

module.exports = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        severity: "warning",
        ignoreAtRules: [
          "for",
          "each",
          "if",
          "else",
          "mixin",
          "/^mixin-/",
          "include",
          "screen",
        ],
      },
    ],
    "declaration-empty-line-before": null,
    "declaration-no-important": null,
    "max-nesting-depth": [5, { severity: "warning" }],
    "number-max-precision": null,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "selector-max-class": null,
    "selector-max-compound-selectors": null,
    "selector-max-id": null,
    "selector-max-type": null,
    "string-quotes": null,
    "function-url-quotes": null,
    "shorthand-property-no-redundant-values": [true, { severity: "warning" }],
  },
};
