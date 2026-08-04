# AGENTS.md

## Repo overview

`@quitsmx/prettier-config` — a Prettier shareable config published to npm. No build step, no linter, basic test. The product is two files:

- `index.js` — the Prettier config (ESM, `export default`)
- `index.d.ts` — TypeScript declarations

## Key conventions

- **ESM only**: `"type": "module"` in package.json. Use `import`/`export`, never `require`.
- **Commented-out rules in `index.js` are intentional** — they document which options use Prettier defaults. Do not remove them.
- **CHANGELOG.md** is manually maintained in Keep-a-Changelog format. Update it when changing the config.
- **Versioning** tracks Prettier's major version (v3.x = Prettier 3).
- **Package manager**: pnpm. Enforced via `preinstall` script (`only-allow`).
- **`devEngines`** in package.json: Node `^22.18.0 || ^24.12.0 || >=26.0.0`, pnpm `^11.18.0`.
- **No commits unless explicitly requested.** Never stage or commit without the user asking.
- **Always use `-s` (Signed-off-by)** when committing.
- **Follow [Conventional Commits](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md)** for commit messages.

## Verification

Run `pnpm test` — executes `node --test` (unit tests) and `prettier --check .` (format validation).
