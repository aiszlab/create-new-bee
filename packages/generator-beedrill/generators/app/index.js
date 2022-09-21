const Generator = require('yeoman-generator')
const walkSync = require('walk-sync')

/**
 * yeoman generator
 */
module.exports = class extends Generator {
  async prompting() {
    this.options = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: '请输入项目名称？',
        validate: (input) => /[(a-z)|/-]+/.test(input)
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入项目描述？'
      }
    ])
  }

  async writting() {
    // 递归读取文件树
    const templatePaths = walkSync(__dirname, {
      directories: false
    })

    this.log('templatePaths====', templatePaths)

    // 循环拷贝
    this.fs.copy(this.templatePath('.'), this.destinationPath('.'))
  }
}
