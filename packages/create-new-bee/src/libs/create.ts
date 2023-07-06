import { Options } from '../typings/create.js'
import open from 'open'
import { Worker } from 'worker_threads'
import { dirname, resolve } from 'path'

import { fileURLToPath } from 'url'

/**
 * @author murukal
 * @description intergation many clis
 */
export const create = async (options: Options) => {
  const currentDirname = dirname(fileURLToPath(import.meta.url))

  const wysiwygRunner = new Worker(resolve(currentDirname, '../utils/wysiwyg.runner.js'))

  // listen the worker message
  // select one cli to go on
  wysiwygRunner.on('message', () => {
    console.log(222)
  })

  // open the browser
  await open('http://localhost:3000/')
}
