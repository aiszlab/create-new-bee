import { RouteObject, useRoutes } from 'react-router-dom'

interface Props {
  routes: RouteObject[]
}

const Routes = (props: Props) => {
  // 路由渲染
  return useRoutes(props.routes)
}

export default Routes
