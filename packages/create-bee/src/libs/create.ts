import yeoman from 'yeoman-environment'
import chalk from 'chalk'
import { Options } from '../typings/create.js'

export enum PackageName {
  Bee = '@bee-lab/generator-bee'
}

export const PACKAGE_ALIAS = '@bee-lab/bee'

export const create = async (options: Options) => {
  // 创建yeoman运行时
  const env = yeoman.createEnv()
  // 运行时：下载依赖
  if (options.local) {
    env.register(env.resolveModulePath(PackageName.Bee), PACKAGE_ALIAS)
  } else {
    await env.installLocalGenerators({
      [PackageName.Bee]: ''
    })
  }

  console.log(env.getRegisteredPackages())

  // 项目初始化: yeoman 托管
  const isInitialized = await env.run(PACKAGE_ALIAS).catch(() => false)
  // 项目初始化失败
  console.log('isInitialized====', isInitialized)
}
