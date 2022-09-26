import { RouteObject } from 'react-router-dom'
import { Loadable } from '@bee-lab/core'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Loadable factory={() => import('../pages/Home')} />
  },
  {
    path: '/about',
    element: <Loadable factory={() => import('../pages/About')} />
  }
]

export default routes
