import ReactDOM from 'react-dom/client'
import { BootstrapProps } from './typings'
import App from './App'
import { resolve } from 'path-browserify'

export enum PluginType {
  Store = 'store',
  Routes = 'routes'
}

export const boorstrap = async (props: BootstrapProps) => {
  const routes = props.routes
    ? import(props.routes === true ? resolve(PluginType.Routes) : props.routes.path)
    : undefined
  const store = props.store
    ? await import(props.store === true ? resolve(PluginType.Store) : props.store.path)
    : undefined

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App store={store} isStrict />)
}
