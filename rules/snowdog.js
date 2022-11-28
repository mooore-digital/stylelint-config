module.exports = {
  rules: {
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-before": null,
    indentation: null,
    "rule-empty-line-before": null,
    "selector-list-comma-newline-after": null,
    "selector-pseudo-element-colon-notation": null,
    "selector-descendant-combinator-no-non-space": null,
    "shorthand-property-no-redundant-values": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "declaration-block-no-duplicate-properties": null,
    "comment-empty-line-before": null,
    "color-hex-length": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-duplicate-selectors": null,
    "max-empty-lines": null,
    "declaration-colon-space-after": null,
    "block-opening-brace-space-after": null,
    "declaration-block-single-line-max-declarations": null,
    "number-leading-zero": null,
    "function-comma-space-after": null,
    // custom rules
    "property-no-unknown": [
      true,
      { severity: "warning", ignoreProperties: "/^mso-/" },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        severity: "warning",
        ignoreProperties: [
          "appearance",
          "text-size-adjust",
          "tap-highlight-color",
        ],
      },
    ],
    "selector-pseudo-element-colon-notation": [
      "double",
      { severity: "warning" },
    ],
  },
};
