import { RouteObject, useRoutes } from 'react-router-dom'

interface Props {
  routes: RouteObject[]
}

const Router = (props: Props) => {
  const routes = useRoutes(props.routes)

  return routes
}

export default Router
