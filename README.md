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

### Magento (LESS)

We moved to the SCSS version as default compiler.
To use the LESS version add magento to the end.

```json
{
  "extends": "@mooore/stylelint-config/luma"
}
```

## Rules

The Mooore style-config is based on the [@fylgja/stylelint-config](https://github.com/getfylgja/stylelint-config)
And most rules are set [there](https://github.com/getfylgja/stylelint-config#rules).

We only optimized it to match our Magento environments.

To checkout our rules see each config file.

## License
[MIT](LICENSE) © [Mooore Digital](https://www.mooore.nl)
