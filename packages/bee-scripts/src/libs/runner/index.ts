import { Context, webpackStart } from 'build-scripts/lib/index'

export class Runner extends Context {
  getCommandModule(options: any) {
    console.log('options====', options)
    return webpackStart
  }
}
