module.exports = {
  extends: "@fylgja/stylelint-config/less",
  rules: {
    "max-nesting-depth": [6, { severity: "warning" }],
    "media-feature-name-no-unknown": null,
    "no-extra-semicolons": null,
    "no-descending-specificity": null,
    "selector-max-compound-selectors": null,
    "selector-max-id": 1,
    "selector-max-class": 5,
    "selector-max-type": 4
  }
};
