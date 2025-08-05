/**
 * Prettier configuration for QuITS.
 *
 * Rules that use their default value are commented out.
 *
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  // bracketSameLine: false,
  // bracketSpacing: true,
  // checkIgnorePragma: false,
  // embeddedLanguageFormatting: 'auto',
  // endOfLine: 'lf',
  // htmlWhitespaceSensitivity: 'css',
  // insertPragma: false,
  // jsxSingleQuote: false,
  // objectWrap: 'preserve',
  // proseWrap: 'preserve',
  // requirePragma: false,
  // singleAttributePerLine: false,
  // tabWidth: 2,
  // trailingComma: 'all',
  // useTabs: false,
  // vueIndentScriptAndStyle: false,
  arrowParens: 'avoid',
  printWidth: 92,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['*.jsonc', 'tsconfig?(.*).json', '.vscode/*.json'],
      options: { parser: 'jsonc', trailingComma: 'all' },
    },
    {
      files: ['test?(s)/**/*'],
      options: { printWidth: 120 },
    },
  ]
}
