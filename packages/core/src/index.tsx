import { createRoot } from 'react-dom/client'
import { ReactNode, StrictMode } from 'react'
import { RouteObject } from 'react-router-dom'
import { ProviderProps } from 'react-redux'
import Loadable from './libs/Loadable'

/**
 * 基础
 */
interface FoundationProps {
  store: ProviderProps['store'] | false
  isStrict: boolean
}

/**
 * 定制化
 */
type Props = (
  | {
      routes: RouteObject[]
    }
  | {
      routes: false
      children: ReactNode
    }
) &
  FoundationProps

/**
 * 渲染器
 */
export const boorstrap = async (props: Props) => {
  let renderer: ReactNode = null

  // route 扩展
  if (props.routes) {
    renderer = (
      <Loadable
        factory={() => import('./components/route/BrowserRouter')}
        injections={{
          routes: props.routes
        }}
      />
    )
  } else {
    renderer = props.children
  }

  // store 扩展
  if (props.store) {
    renderer = (
      <Loadable
        factory={() => import('./components/store/Provider')}
        injections={{
          store: props.store,
          children: renderer
        }}
      />
    )
  }

  // StrictMode 扩展
  if (props.isStrict) {
    renderer = <StrictMode>{renderer}</StrictMode>
  }

  createRoot(document.getElementById('root') as HTMLElement).render(renderer)
}

/**
 * Loadable 组件
 */
export { Loadable }
