import { BrowserRouter, RouteObject } from 'react-router-dom'
import Routes from './Routes'

interface Props {
  routes: RouteObject[]
}

export default (props: Props) => {
  return (
    <BrowserRouter>
      <Routes routes={props.routes} />
    </BrowserRouter>
  )
}
