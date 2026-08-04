/** @import { Config } from 'prettier */
/**
 * Prettier configuration for QuITS.
 *
 * Rules that use their default value are commented out.
 *
 * @see https://prettier.io/docs/configuration
 * @type {Config}
 */
const prettierConfig = {
  // arrowParens: 'always',
  // bracketSameLine: false,
  // bracketSpacing: true,
  // checkIgnorePragma: false,
  // embeddedLanguageFormatting: 'auto',
  // endOfLine: 'lf',
  // htmlWhitespaceSensitivity: 'css',
  // insertPragma: false,
  // jsxSingleQuote: false,
  // objectWrap: 'preserve',
  // printWidth: 80,
  // proseWrap: 'preserve',
  // requirePragma: false,
  // singleAttributePerLine: false,
  // tabWidth: 2,
  // trailingComma: 'all',
  // useTabs: false,
  // vueIndentScriptAndStyle: false,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: [
        '.babelrc.json',
        '.devcontainer/**/*.json',
        '.eslintrc.json',
        '.prettierrc.json',
        '.swcrc',
        '.vscode/*.json',
        '*.code-workspace',
        '*.jsonc',
        'api-extractor.json',
        'babel.config.json',
        'deno.json',
        'jsconfig.*.json',
        'jsconfig.json',
        'jsr.json',
        'lerna.json',
        'nx.json',
        'tsconfig.*.json',
        'tsconfig.json',
        'turbo.json',
        'typedoc.json',
      ],
      options: { parser: 'jsonc', trailingComma: 'all' },
    },
    {
      files: ['*.md', '*.mdx', '*.markdown'],
      options: { parser: 'markdown', proseWrap: 'never' },
    },
  ],
}

export default prettierConfig
