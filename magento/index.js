module.exports = {
  extends: "@fylgja/stylelint-config/less",
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
    "no-descending-specificity": null,
    "selector-max-class": 5,
    "selector-max-id": 1,
    "selector-max-type": 4,
    "selector-max-compound-selectors": [
      6,
      {
        severity: "warning"
      }
    ],
    "selector-max-specificity": [
      "1,5,2",
      {
        severity: "warning"
      }
    ],
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"]
      }
    ]
  }
};
