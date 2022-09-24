import { Plugin } from 'bee-scripts/typings'

const plugin: Plugin = (api) => {
  const { setValue } = api

  setValue('HAS_JSX_RUNTIME', true)
}

export default plugin
