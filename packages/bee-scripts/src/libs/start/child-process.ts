import { Runner } from '../runner'

// 执行器
;(async () => {
  const runner = new Runner({
    command: 'start',
    args: {},
    getBuiltInPlugins: () => ['@bee-lab/build-plugin-react-runtime', 'build-plugin-react-app'],
    rootDir: process.cwd()
  })

  const server = await runner.run<
    undefined,
    null | {
      close: Function
    }
  >()

  ;['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      server?.close()
      process.exit(0)
    })
  })
})()
