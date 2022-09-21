import { BootstrapProps } from './typings'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = (props: BootstrapProps) => {
  let render = <>{props.children}</>

  // route 扩展

  // store 扩展

  // StrictMode 扩展
  if (props.isStrict) {
    render = <StrictMode>{render}</StrictMode>
  }

  return render
}

export default App
