// third
import inquirer from 'inquirer'
import yeoman from 'yeoman-environment'
import chalk from 'chalk'

export const create = async () => {
  // 创建yeoman运行时
  const env = yeoman.createEnv()
  // 运行时：下载依赖
  const isInstalled = await env.installLocalGenerators({
    '@bee-lab/generator-bee': ''
  })

  console.log('isInstalled====', isInstalled)

  console.log(env.getRegisteredPackages())

  // 项目初始化: yeoman 托管
  const isInitialized = await env.run('beedrill').catch(() => false)
  // 项目初始化失败
  console.log('isInitialized====', isInitialized)
}
