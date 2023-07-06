import { Options } from '../typings/create.js'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const nextStart = require('@aiszlab/wysiwyg')

/**
 * @author murukal
 * @description 脚手架创建模板的函数，集成了不少插件，慢慢看~
 */
export const create = async (options: Options) => {
  console.log(nextStart)

  nextStart()
}
