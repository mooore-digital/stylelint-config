module.exports = {
  extends: ["./snowdog", "./scss"],
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
    "block-closing-brace-empty-line-before": ["never", { severity: "warning" }],
    "block-closing-brace-newline-after": [
      "always-multi-line",
      {
        severity: "warning",
        ignoreAtRules: ["if", "else", "when"],
      },
    ],
    "block-closing-brace-newline-before": [
      "always-multi-line",
      { severity: "warning" },
    ],
    "block-closing-brace-space-before": [
      "always-single-line",
      {
        severity: "warning",
        ignoreAtRules: ["if", "else", "when"],
      },
    ],
    "block-opening-brace-newline-after": [
      "always-multi-line",
      { severity: "warning" },
    ],
    "block-opening-brace-space-after": [
      "always-single-line",
      { severity: "warning" },
    ],
    "block-opening-brace-space-before": [
      "always",
      {
        severity: "warning",
        ignoreAtRules: ["if", "else", "when"],
      },
    ],
    "declaration-empty-line-before": null,
    "declaration-no-important": null,
    "function-calc-no-invalid": null,
    "function-parentheses-space-inside": [
      "never-single-line",
      { severity: "warning" },
    ],
    "function-whitespace-after": ["always", { severity: "warning" }],
    "max-empty-lines": [1, { severity: "warning" }],
    "max-nesting-depth": [5, { severity: "warning" }],
    indentation: [4, { severity: "warning" }],
    "number-max-precision": null,
    "number-leading-zero": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-extra-semicolons": [true, { severity: "warning" }],
    "selector-combinator-space-after": ["always", { severity: "warning" }],
    "selector-max-class": null,
    "selector-max-compound-selectors": null,
    "selector-max-id": null,
    "selector-max-type": null,
    "string-quotes": null,
    "function-url-quotes": null,
    "shorthand-property-no-redundant-values": [true, { severity: "warning" }],
    "property-no-vendor-prefix": [
      true,
      { severity: "warning", ignoreProperties: ["appearance"] },
    ],
    "property-no-unknown": [
      true,
      { severity: "warning", ignoreProperties: "/^mso-/" },
    ],
    "selector-pseudo-element-colon-notation": [
      "double",
      { severity: "warning" },
    ],
  },
};
