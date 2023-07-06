import { Options } from '../typings/create.js'
import open from 'open'
import { Worker } from 'worker_threads'
import { dirname, resolve } from 'path'

import { fileURLToPath } from 'url'

/**
 * @author murukal
 * @description 脚手架创建模板的函数，集成了不少插件，慢慢看~
 */
export const create = async (options: Options) => {
  console.log(fileURLToPath(import.meta.url))

  const currentDirname = dirname(fileURLToPath(import.meta.url))

  const wysiwygRunner = new Worker(resolve(currentDirname, '../utils/wysiwyg.runner.js'))

  wysiwygRunner.on('message', () => {
    console.log(222)
  })

  // const child = await open('http://localhost:3000/', {})

  // await teardown()
}
