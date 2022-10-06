const Generator = require('yeoman-generator')
const path = require('path')
const glob = require('glob')

const TYPE_SCRIPT = 'type-script'
const ROUTE = 'route'
const STORE = 'store'

const plugins = new Map().set(TYPE_SCRIPT, 'TypeScript').set(ROUTE, 'ReactRouterDom').set(STORE, 'Redux')

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
        default: [...plugins.keys()],
        choices: [...plugins.entries()].map(([value, name]) => ({
          value,
          name
        }))
      }
    ])

    const useTypeScript = options.plugins.includes(TYPE_SCRIPT)
    const useRoute = options.plugins.includes(ROUTE)
    const useStore = options.plugins.includes(STORE)

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
