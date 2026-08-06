# prettier-config Changes

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [4.0.3] - 2026-08-06

Added `.pnpmfile.mjs` with a `beforePacking` hook to strip development-only blocks from package.json, allowing the revert of the `only-allow` removal that caused runtime issues.

Removed `*.mdx` and added other extensions to the Markdown override, as MDX support is incomplete in Prettier 3.x.

### Added

- `.pnpmfile.mjs` with `beforePacking` hook to strip `devDependencies`, `devEngines`, and `scripts` from the published manifest
- `publishConfig.access: "public"` in package.json

### Changed

- `prettier` is now a required peer dependency (removed `peerDependenciesMeta.optional`)
- Markdown override: removed `*.mdx` (Prettier's native MDX support is incomplete), added `*.mdown`, `mkd`, `mkdown`
- markdownlint globs: removed `**/*.mdx` to match the Prettier override change
- `publish.yml`: removed redundant `--access public` flag (now in `publishConfig`)

### Fixed

- Restored `only-allow` and `preinstall` script (reverted removal from 4.0.2)

## [4.0.2] - 2026-08-04

### Removed

- `only-allow` dependency and `preinstall` script — the tool fails when this package is installed as a dependency in npm-based projects, defeating its purpose

## [4.0.1] - 2026-08-04

### Added

- `files` field to package.json to limit published files to `index.js` and `index.d.ts`

## [4.0.0] - 2026-08-04

Version 4 of this configuration introduces 2 breaking changes that will affect all our code. We recommend implementing them in a single commit once the affected project's tests pass at 100%.

The first change is `printWidth`, which now uses the default value of 80, better suited for the limited space available alongside AI chat panels and/or IDE minimaps.

The second change affects Markdown table formatting: tables are now compacted when their length exceeds `printWidth`, making them compatible with the _markdownlint MD060_ default `table-column-style: { aligned_delimiter: false, style: any }`.

### Added

- Package metadata and publish config to package.json
- markdown override to format markdown tables in markdownlint compatible styles "aligned" and "compact".
- `prettier.config.mjs` for self-referential config loading
- Test suite using `node:test`
- GitHub Actions CI/CD workflows:
  - `test.yml`: unit tests + Prettier format check in a multi Node.js version matrix
  - `publish.yml`: npm publication with provenance via OIDC
  - `release.yml`: auto-tagging on `package.json` version bumps, release notes from `.github/whats_new`, and `repository_dispatch` to trigger publishing

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

[Unreleased]: https://github.com/quitsmx/prettier-config/compare/v4.0.3...HEAD
[4.0.3]: https://github.com/quitsmx/prettier-config/compare/v4.0.2...v4.0.3
[4.0.2]: https://github.com/quitsmx/prettier-config/compare/v4.0.1...v4.0.2
[4.0.1]: https://github.com/quitsmx/prettier-config/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/quitsmx/prettier-config/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/quitsmx/prettier-config/releases/tag/v3.1.0
