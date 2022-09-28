import { sync } from 'cross-spawn'

/**
 * 启动生产模式
 * @react 依赖react-scripts
 */
export const build = async () => {
  // 同步调用 react-scripts
  sync('node', [require.resolve('react-scripts/bin/react-scripts.js'), 'build'], {
    stdio: 'inherit'
  })
}
