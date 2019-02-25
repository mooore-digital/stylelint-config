# Marissen stylelint-config

[![NPM version](https://img.shields.io/npm/v/@marissen/stylelint-config.svg)](https://www.npmjs.org/package/@marissen/stylelint-config)

A sharable stylelint config object that enforces Marissen css rules.

<details><summary>Table of Contents</summary>

- [Installation](#installation)
- [Usage](#usage)
- [Extending](#extending)
- [Extensions](#extensions)
  - [SCSS](#scss)
- [Rules](#rules)
- [License](#license)

</details>

## Installation

```bash
npm install @marissen/stylelint-config --save-dev
```

## Usage

If you've installed @marissen/stylelint-config, just set your stylelint config to:

```json
{
  "extends": "@marissen/stylelint-config"
}
```

## Extending

Simply add a `"rules"` key to your config,
then add your overrides and additions there.

```json
{
  "extends": "@marissen/stylelint-config",
  "rules": {
    "rule-empty-line-before": [
        "always-multi-line", {
            except: ["first-nested"],
            ignore: ["after-comment"]
        }
    ],
  }
}
```

## Extensions

### SCSS

```json
{
  "extends": "@marissen/stylelint-config/scss"
}
```

## Rules

The Marissen style-config is based on the [@fylgja/stylelint-config](https://github.com/getfylgja/stylelint-config)
And most rules are set [there](https://github.com/getfylgja/stylelint-config#rules).

We only optimized it to match our Magento environments.

To checkout our rules see each config file.

## License
[MIT](LICENSE) © [Marissen e-commerce](https://www.marissen.net)
