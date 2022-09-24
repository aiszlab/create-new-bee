interface PluginAPI {
  setValue: (key: string | number, value: any) => void
}

export type PluginHandler = (pluginAPI: PluginAPI) => void | Promise<void>
