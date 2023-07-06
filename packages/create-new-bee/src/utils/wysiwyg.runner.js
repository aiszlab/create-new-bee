import { startServer } from '@aiszlab/wysiwyg'

startServer({
  dir: '/Users/murukal/workspace/create-new-bee/packages/wysiwyg',
  isDev: false,
  port: 3000,
  useWorkers: true,
  hostname: '0.0.0.0'
})
