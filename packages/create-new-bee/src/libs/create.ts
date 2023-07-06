import { Options } from '../typings/create.js'
import open from 'open'

import { startServer } from '@aiszlab/wysiwyg'

/**
 * @author murukal
 * @description 脚手架创建模板的函数，集成了不少插件，慢慢看~
 */
export const create = async (options: Options) => {
  console.log(startServer)

  const teardown = await startServer({
    dir: '/Users/murukal/workspace/create-new-bee/packages/wysiwyg',
    isDev: false,
    port: 3000,
    useWorkers: true,
    hostname: '0.0.0.0'
  })

  const child = await open('http://localhost:3000/', {})

//   await teardown()
}
