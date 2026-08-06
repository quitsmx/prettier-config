// @ts-check
/** @typedef {Partial<import('./package.json')>} PackageJson */

/**
 * Remove development-only fields from published package.
 * This avoid errors with `devEngines` and `allow-only`, and prevent pnpm from
 * requesting a package `build`.
 *
 * @param {PackageJson} pkg
 * @returns {PackageJson}
 */
function beforePacking(pkg) {
  delete pkg.devDependencies
  delete pkg.devEngines
  delete pkg.files
  delete pkg.scripts
  return pkg
}

export const hooks = {
  beforePacking,
}
