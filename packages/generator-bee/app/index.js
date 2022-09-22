const Generator = require('yeoman-generator')
const walkSync = require('walk-sync')
const path = require('path')

/**
 * yeoman generator
 */
module.exports = class extends Generator {
  injections = {
    name: '',
    description: ''
  }

  async prompting() {
    this.injections = await this.prompt([
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
      }
    ])
  }

  async writting() {
    // 递归读取文件树
    const templatePaths = walkSync(path.join(__dirname, 'templates'), {
      directories: false
    })

    // 循环拷贝
    templatePaths.forEach((templatePath) => {
      this.fs.copyTpl(this.templatePath(templatePath), this.destinationPath(templatePath), this.injections)
    })
  }
}
