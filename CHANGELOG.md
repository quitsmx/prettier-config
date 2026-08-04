# prettier-config Changes

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

Version 4 of this configuration introduces 2 breaking changes that will affect all our code. We recommend implementing them in a single commit once the affected project's tests pass at 100%.

The first change is `printWidth`, which now uses the default value of 80, better suited for the limited space available alongside AI chat panels and/or IDE minimaps.

The second change affects Markdown table formatting: tables are now compacted when their length exceeds `printWidth`, making them compatible with the _markdownlint MD060_ default `table-column-style: { aligned_delimiter: false, style: any }`.

### Added

- Package metadata and publish config to package.json
- markdown override to format markdown tables in markdownlint compatible styles "aligned" and "compact".
- `prettier.config.mjs` for self-referential config loading
- Test suite using `node:test`

### Changed

- Bump Prettier to `^3.3.3`
- Reinforces the use of pnpm for development

### Fixed

- Correct misspelled `package.json#devDendencies` key
- Correct export of `index.d.ts`

## [3.1.0] - 2025-08-13

### Added

- Types in separate file (d.ts), and update "exports" in package.json

### Changed

- Use the default "always" for `arrowParens` (because many reasons)

## \[3.0.1] - 2025-08-05

### Fixed

- Remove non-generic override.

## \[3.0.0] - 2025-08-05

First public release, as v3.x to match the major version of Prettier

<!-- Versions -->

[Unreleased]: https://github.com/quitsmx/prettier-config/compare/v3.1.0...HEAD
[3.1.0]: https://github.com/quitsmx/prettier-config/releases/tag/v3.1.0
