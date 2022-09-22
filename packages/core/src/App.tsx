import { BootstrapProps } from './typings'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvide, ProviderProps } from 'react-redux'

interface Props {
  store: ProviderProps['store']
  isStrict: boolean
}

const App = (props: Props) => {
  let renderer = null

  // route 扩展

  // store 扩展
  if (props.store) {
    renderer = <StoreProvide store={props.store}>{renderer}</StoreProvide>
  }

  // StrictMode 扩展
  if (props.isStrict) {
    renderer = <StrictMode>{renderer}</StrictMode>
  }

  return renderer
}

export default App
