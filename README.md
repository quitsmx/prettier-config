# @quitsmx/prettier-config

Prettier [shareable config](https://prettier.io) used by QuITS mx

## Requirements

- Prettier `^3.3.3` (recommended: `3.9.x` for improved stability and bug fixes)

## Install

Install it as a devDependency with the appropriate command for your package manager.

Example:

```bash
pnpm add @quitsmx/prettier-config -D
```

## Important Changes (v4)

This configuration introduces two breaking changes that affect all projects:

1. **`printWidth`**: Now uses Prettier's default value of 80 (previously 92), better suited for limited screen space alongside AI chat panels and IDE minimaps.

2. **Markdown tables**: Tables exceeding `printWidth` are now formatted in compact style (`proseWrap: never`), compatible with markdownlint MD060 default settings.

We recommend implementing these changes in a single commit once your project's tests pass at 100%.

## Use It

In package.json:

```json
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "prettier": "@quitsmx/prettier-config"
}
```

In a supported configuration file like `prettier.config.mjs`, where you can override rules if you wish:

```js
import commonConfig from '@quitsmx/prettier-config'

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...commonConfig,
  // Override any rule as needed
}

export default config
```

## License

The [MIT License](LICENSE) &copy; 2025 QuITS
