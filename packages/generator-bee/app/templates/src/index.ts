import { boorstrap } from '@bee-lab/core'
import store from './store'
import routes from './routes'

/**
 * 渲染DOM
 */
boorstrap({
  routes,
  store,
  isStrict: true
})
