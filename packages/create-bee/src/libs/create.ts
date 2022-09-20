// third
import inquirer from 'inquirer'
import yeoman from 'yeoman-environment'
import chalk from 'chalk'
// project
import { PROJECT_TEMPLATE_CHOICE, TELEPORT_CHOICE } from '../assets/create.js'

/**
 *
 */
export const create = async () => {
  // 选项
  const createOptions = await inquirer.prompt([TELEPORT_CHOICE, PROJECT_TEMPLATE_CHOICE])
  console.log('createOptions=====', createOptions)
  // 创建yeoman运行时
  const env = yeoman.createEnv()
  // 运行时：下载以来
  const isInstalled = await env.installLocalGenerators({
    'generator-fantu': ''
  })
  // generator 安装失败
  if (!isInstalled) {
  }
  // 项目初始化: yeoman 托管
  const isInitialized = await env.run('fantu:react-mui').catch(() => false)
  // 项目初始化失败
  console.log('issssss====', isInitialized, chalk.red('111'))
}
