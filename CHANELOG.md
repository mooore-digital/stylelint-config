# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2022-11-28
### Fixed
- Line length rule on Tailwind by unsetting it

## [2.0.0] - 2022-11-28
### Added
- Add specific syntax support for Luma
- Add specific syntax support for Hyva
- Add specific syntax support for SCSS (without Magento)

### Changed
- Renamed scss to snowdog for snowdog specific syntax
- Updated Fylgja stylelint to v5.0,
  this add support for parsing inline styles

### Removed
- Any Magento rules from index,
  Use the new specific syntax instead

## [1.7.1] - 2022-06-01
### Added
- tests

### Fixed
- `function-calc-no-invalid` rule by removing it
- Missing dependencies

## [1.7.0] - 2022-06-01
### Added
- `@when` support in multi line rules

### Changed
- Updated Dependencies
- **Breaking Change!** renamed config for _magento_ to _luma_,
  to make it clear that this is for the LESS syntax
- Cleanup SCSS syntax with new version
- Hex values will now trow an error if the not lowercase
- Hex values will now trow an error if used in long syntax
- Make more rules spit warning instead of using null

## [1.6.1] - 2021-08-23
### Changed
- Update dependencies
- Changelog is now using the keepachangelog syntax

## [1.6.0] - 2021-03-09
### Changed
- Update dependencies
- Rule block-closing-brace-space-before

## [1.5.0] - 2021-01-02
### Changed
- Update dependencies

## [1.4.2] - 2020-10-30
### Changed
- Improved Formatting

### Removed
- Rule scss/media-feature-value-dollar-variable, rule already correct in @fylgja

## [1.4.1] - 2020-09-03
### Fixed
- Unset rule scss/comment-no-empty

## [1.4.0] - 2020-07-31
### Changed
- Update dependencies
- Set correct LESS dependency

## [1.3.0] - 2019-12-12
### Added
- snowdog frontools config

### Changed
- SCSS version to the Fylgja version with unsets

## [1.2.0] - 2019-11-28
### Changed
- Update dependencies
- Renamed package

## [1.1.1] - 2019-05-19
### Changed
- Update dependencies

## [1.1.0] - 2019-04-14
### Changed
- Update dependencies
  - See latest changes to [getFylgja/stylelint-config](https://github.com/fylgja/stylelint-config/releases/)
- Make dependency patch version a wildcard

## [1.0.0] - 2019-02-25
Initial release 🎉

