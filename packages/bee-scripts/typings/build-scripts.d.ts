interface PluginAPI {
  setValue: (key: string | number, value: any) => void
}

export type Plugin = (pluginAPI: PluginAPI) => void | Promise<void>
