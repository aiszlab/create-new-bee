const Generator = require('yeoman-generator')
const path = require('path')
const glob = require('glob')

/**
 * yeoman generator
 */
module.exports = class extends Generator {
  injections = {
    name: '',
    description: '',
    useTypeScript: false
  }

  /**
   * 注入用户选项
   */
  async prompting() {
    const options = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: '请输入项目名称',
        validate: (input) => /[(a-z)|/-]+/.test(input)
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入项目描述'
      },
      {
        type: 'checkbox',
        name: 'plugins',
        message: '请选择需要使用的插件',
        choices: [
          {
            value: 'redux',
            name: 'Redux'
          },
          {
            value: 'route',
            name: 'ReactRouterDom'
          },
          {
            value: 'type-script',
            name: 'TypeScript'
          }
        ]
      }
    ])

    const useTypeScript = options.plugins.includes('type-script')

    this.injections = {
      name: options.name,
      description: options.description,
      useTypeScript,
      language: useTypeScript ? 'ts' : 'js'
    }
  }

  /**
   * 生成项目文件
   */
  async writting() {
    // 递归读取文件树
    const templatePaths = glob.sync('**/*', {
      cwd: path.join(__dirname, 'templates'),
      nodir: true
    })

    // 循环拷贝
    templatePaths.forEach((templatePath) => {
      this.fs.copyTpl(this.templatePath(templatePath), this.destinationPath(templatePath), this.injections)
    })
  }

  /**
   * 下载依赖
   */
  install() {
    this.yarnInstall()
  }
}
