module.exports = {
  extends: ["@fylgja/stylelint-config/scss"],
  rules: {
    "scss/at-else-closing-brace-newline-after": ["always-last-in-chain", { severity: "warning" }],
    "scss/at-else-closing-brace-space-after": ["always-intermediate", { severity: "warning" }],
    "scss/at-else-empty-line-before": ["never", { severity: "warning" }],
    "scss/at-else-if-parentheses-space-before": ["always", { severity: "warning" }],
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-parentheses-space-before": ["never", { severity: "warning" }],
    "scss/at-if-closing-brace-newline-after": ["always-last-in-chain", { severity: "warning" }],
    "scss/at-if-closing-brace-space-after": ["always-intermediate", { severity: "warning" }],
    "scss/at-if-no-null": null,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": null,
    "scss/at-mixin-parentheses-space-before": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [true, { severity: "warning" }],
    "scss/dollar-variable-colon-newline-after": null,
    "scss/dollar-variable-colon-space-after": null,
    "scss/dollar-variable-colon-space-before": null,
    "scss/dollar-variable-no-missing-interpolation": null,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/function-color-relative": [
      true,
      {
        severity: "warning",
        message: "Use the new scss color functions instead!",
      },
    ],
    "scss/comment-no-empty": null,
    "scss/operator-no-newline-after": null,
    "scss/operator-no-newline-before": [true, { severity: "warning" }],
    "scss/operator-no-unspaced": null,
    "scss/selector-no-redundant-nesting-selector": [true, { severity: "warning" }]
  }
};
