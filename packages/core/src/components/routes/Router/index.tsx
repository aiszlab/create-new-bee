import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'

interface Props {
  routes: RouteObject[]
}

const Router = (props: Props) => {
  // 路由渲染
  const routes = useRoutes(props.routes)

  // UI
  return <BrowserRouter>{routes}</BrowserRouter>
}

export default Router
