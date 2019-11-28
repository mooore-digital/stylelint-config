module.exports = {
  extends: "@fylgja/stylelint-config/scss",
  rules: {
    "max-nesting-depth": [
      5,
      {
        severity: "warning"
      }
    ]
  }
};
