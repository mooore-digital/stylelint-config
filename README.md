# Mooore stylelint-config

[![NPM version](https://img.shields.io/npm/v/@mooore/stylelint-config.svg)](https://www.npmjs.org/package/@mooore/stylelint-config)

A sharable stylelint config object that enforces Mooore Digital css rules.

## Installation

```bash
npm install @mooore/stylelint-config --save-dev
```

## Usage

If you've installed @mooore/stylelint-config,
just set your stylelint config to:

```json
{
  "extends": "@mooore/stylelint-config"
}
```

## Extending

Simply add a `"rules"` key to your config,
then add your overrides and additions there.

```json
{
  "extends": "@mooore/stylelint-config",
  "rules": {
    "rule-empty-line-before": [
        "always-multi-line", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }
    ],
  }
}
```

## Extensions

We offer special rules for the following frameworks;

- SCSS `"@mooore/stylelint-config/scss",`
- Magento (LESS) `"@mooore/stylelint-config/luma",`
- Magento (SCSS) `"@mooore/stylelint-config/snowdog",`
- Magento (Hyva) `"@mooore/stylelint-config/hyva",`

Simple add the last part to your extends option to use the specific rules.

## Rules

The Mooore style-config is based on the [@fylgja/stylelint-config](https://github.com/getfylgja/stylelint-config)
And most rules are set [there](https://github.com/getfylgja/stylelint-config#rules).

We only optimized it to match our Magento environments.

To checkout our rules see each config file.

## License
[MIT](LICENSE) © [Mooore Digital](https://www.mooore.nl)
