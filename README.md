# @quitsmx/prettier-config

Prettier [shareable config](https://prettier.io) used by QuITS mx

## Install

Install it as a devDependency with the appropriate command for your package manager.

Example:

```bash
pnpm add @quitsmx/prettier-config -D
```

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
  printWidth: 96,
}

export default config
```

## License

The [MIT License](LICENSE) &copy; 2025 QuITS
