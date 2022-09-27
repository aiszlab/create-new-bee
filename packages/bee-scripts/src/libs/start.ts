import { sync } from 'cross-spawn'

/**
 * 启动开发模式
 * @react 依赖react-scripts
 */
export const start = async () => {
  // 同步调用 react-scripts
  sync('node', [require.resolve('react-scripts/bin/react-scripts.js')], {
    stdio: 'inherit'
  })
}
