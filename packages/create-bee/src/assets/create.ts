// third
import type { ListQuestion } from 'inquirer'
// project
import type { CreateOptions } from '../typings/create.js'

/**
 * 传送门 选择题
 */
export const TELEPORT_CHOICE: ListQuestion<CreateOptions> = {
  type: 'list',
  message: '传送门',
  name: 'teleport',
  choices: [
    {
      value: 'front-end',
      name: '前端'
    },
    {
      value: 'back-end',
      name: '后端'
    }
  ]
}

/**
 * 前端项目 选择题
 */
export const PROJECT_TEMPLATE_CHOICE: ListQuestion<Pick<CreateOptions, 'teleport'>> = {
  type: 'list',
  name: 'projectTemplate',
  message: '项目模板',
  choices: [
    {
      value: 'react-mui',
      name: 'react + material-ui'
    },
    {
      value: 'react-antd',
      name: 'react + ant-design'
    }
  ]
}
