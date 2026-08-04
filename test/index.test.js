import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import * as prettier from 'prettier'
import config from '../index.js'

describe('config shape', () => {
  it('exports an object', () => {
    assert.strictEqual(typeof config, 'object')
    assert.notStrictEqual(config, null)
  })

  it('has the expected non-default values', () => {
    assert.strictEqual(config.semi, false)
    assert.strictEqual(config.singleQuote, true)
    assert.strictEqual(config.quoteProps, 'consistent')
  })

  it('has a JSONC override with trailingComma all', () => {
    assert.ok(Array.isArray(config.overrides))
    const jsoncOverride = config.overrides.find(
      (o) => o.options?.parser === 'jsonc',
    )
    assert.ok(jsoncOverride, 'JSONC override not found')
    assert.strictEqual(jsoncOverride.options.trailingComma, 'all')
    assert.ok(Array.isArray(jsoncOverride.files))
    assert.ok(
      jsoncOverride.files.includes('nx.json'),
      'nx.json should be covered by the JSONC override',
    )
  })
})

describe('prettier integration', () => {
  it('formats JS with no semicolons and single quotes', async () => {
    const input = 'const x = "hello";'
    const output = await prettier.format(input, {
      ...config,
      parser: 'babel',
    })
    assert.strictEqual(output, "const x = 'hello'\n")
  })

  it('formats JSONC with trailing commas (override applied via filepath)', async () => {
    // Prettier 3.3+ supports trailing commas in jsonc when output is multiline.
    const input =
      '{"compilerOptions":{"target":"ES2022","module":"NodeNext","strict":true,"esModuleInterop":true}}'
    const expected = [
      `{`,
      `  "compilerOptions": {`,
      `    "target": "ES2022",`,
      `    "module": "NodeNext",`,
      `    "strict": true,`,
      `    "esModuleInterop": true,`,
      `  },`,
      `}\n`,
    ].join('\n')

    // The override is applied via filepath, not parser option.
    const resolved = await prettier.resolveConfig('tsconfig.json', {
      config: './index.js',
    })
    const output = await prettier.format(input, {
      ...resolved,
      printWidth: 72, // to force multiline output.
    })

    assert.strictEqual(output, expected)
    assert.ok(output.includes('},\n'), 'Output should contain trailing comma')
  })

  it('formats markdown tables in markdownlint compatible "aligned style"', async () => {
    const input = [
      `# t1`,
      `| foo   | bar |`,
      `| ---   | --- |`,
      `| col A | col B |`,
      `| -     | -  |`,
    ].join('\n')
    const expected = [
      `# t1\n`,
      `| foo   | bar   |`,
      `| ----- | ----- |`,
      `| col A | col B |`,
      `| -     | -     |\n`,
    ].join('\n')

    const resolved = await prettier.resolveConfig('README.md', {
      config: './index.js',
    })
    const output = await prettier.format(input, resolved)

    assert.strictEqual(output, expected)
  })

  it('formats markdown tables in markdownlint compatible "compact style"', async () => {
    const input = [
      `# t1`,
      `| foo   | bar | baz | D | E | F |`,
      `| ---   | --- | ----| - | - | - |`,
      `| column A - row 1 | column B - row 1 | column C - row 1 | column D - row 1 | column E - row 1 | column F - row 1 |`,
      `| -     | -  | - | - | - | -  |`,
    ].join('\n')
    const expected = [
      `# t1\n`,
      `| foo | bar | baz | D | E | F |`,
      `| --- | --- | --- | --- | --- | --- |`,
      `| column A - row 1 | column B - row 1 | column C - row 1 | column D - row 1 | column E - row 1 | column F - row 1 |`,
      `| - | - | - | - | - | - |\n`,
    ].join('\n')

    const resolved = await prettier.resolveConfig('README.md', {
      config: './index.js',
    })
    const output = await prettier.format(input, resolved)

    assert.strictEqual(output, expected)
  })
})
