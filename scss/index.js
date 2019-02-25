module.exports = {
  extends: "@fylgja/stylelint-config/scss",
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless"],
        ignore: ["after-comment", "first-nested"],
        ignoreAtRules: ["import", "if", "else"]
      }
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],
    "max-nesting-depth": [
      5,
      {
        severity: "warning"
      }
    ],
    "no-descending-specificity": null
  }
};
