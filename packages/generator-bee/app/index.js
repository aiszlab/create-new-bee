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
    useTypeScript: false,
    useRoute: false,
    useStore: false,
    language: 'js'
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
            value: 'store',
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
    const useRoute = options.plugins.includes('route')
    const useStore = options.plugins.includes('store')

    this.injections = {
      name: options.name,
      description: options.description,
      useTypeScript,
      useRoute,
      useStore,
      language: useTypeScript ? 'ts' : 'js'
    }
  }

  /**
   * 生成项目文件
   */
  async writting() {
    const cwd = path.join(__dirname, 'templates')

    // 递归读取文件树
    const templatePaths = glob.sync('**/*', {
      cwd,
      nodir: true,
      absolute: true,
      dot: true
    })

    // ignore
    const ignores = [
      ...(this.injections.useTypeScript
        ? []
        : glob.sync('tsconfig.json.ejs', {
            cwd,
            absolute: true,
            nodir: true
          })),
      ...(this.injections.useRoute
        ? []
        : glob.sync('src/routes/**/*', {
            cwd,
            absolute: true,
            nodir: true
          })),
      ...(this.injections.useStore
        ? []
        : glob.sync('src/store/**/*', {
            cwd,
            absolute: true,
            nodir: true
          }))
    ]

    // 循环拷贝
    this.fs.copyTpl(templatePaths, this.destinationPath(), this.injections, undefined, {
      globOptions: {
        ignore: ignores
      }
    })
  }
}
