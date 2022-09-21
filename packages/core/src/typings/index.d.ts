import { ReactNode } from 'react'
import { PluginType } from '..'

type PluginConfiguration =
  | boolean
  | {
      path: string
    }

/**
 * 入口初始化参数
 */
export interface BootstrapProps {
  children: ReactNode
  isStrict: false
  [PluginType.Routes]: PluginConfiguration
  [PluginType.Store]: PluginConfiguration
}
