import { inc, ReleaseType } from 'semver'
import { createRequire } from 'module'
import { join } from 'path'
import { Package } from '../typings/package.js'
import glob from 'glob'
import inquirer from 'inquirer'
import spawn from 'cross-spawn'

const workIn = process.cwd()
const require = createRequire(import.meta.url)

/**
 * 执行
 */
export const release = async () => {
  const profiles = getPackageProfiles()

  /* 用户选择 */
  const { names } = await inquirer.prompt<{
    names: string[]
  }>([
    {
      type: 'checkbox',
      name: 'names',
      message: '请选择你需要发布的 package',
      choices: [...profiles.keys()].map((name) => ({
        value: name,
        name
      }))
    }
  ])

  if (!names.length) return

  names.forEach(async (name) => {
    const profile = profiles.get(name)
    if (!profile) return

    const version = inc(profile.version, 'prerelease', 'beta')
    if (!version) return

    spawn.sync('npm', ['pkg', 'set', `version=${version}`, `--workspace=${name}`])
  })
}

/**
 * 读取pkg
 */
const getPackageProfiles = () => {
  const pkgPaths = glob.sync(join('**/package.json'), {
    cwd: workIn,
    ignore: ['**/node_modules/**/*'],
    dot: true,
    absolute: true
  })

  return pkgPaths.reduce((prev, path) => {
    const pkg = require(path) as Package

    if (!pkg.name || !pkg.version) return prev

    return prev.set(pkg.name, {
      name: pkg.name,
      version: pkg.version
    })
  }, new Map<string, Package>())
}
