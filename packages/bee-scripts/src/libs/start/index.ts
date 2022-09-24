import { fork } from 'child_process'

const childProcessPath = require.resolve('./child-process')

export const start = () => {
  const childProcess = fork(childProcessPath)

  /**
   * 退出
   */
  childProcess.on('exit', (code) => {
    console.log('111')
    code && process.exit(code)
  })
}
