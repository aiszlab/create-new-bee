import { Suspense, lazy, ReactNode, useMemo } from 'react'

type Props =
  | string
  | {
      path: string
      fallback: ReactNode
    }

const Loadable = (props: Props) => {
  /**
   * fallback
   */
  const fallbackRender = useMemo(() => {
    if (!(props instanceof Object)) {
      return null
    }
    return props.fallback
  }, [props])

  /**
   * path
   */
  const Component = useMemo(() => {
    if (props instanceof Object) {
      return lazy(() => import(`../${props.path}`))
    }

    return lazy(() => import(`../${props}`))
  }, [props])

  return (
    <Suspense fallback={fallbackRender}>
      <Component />
    </Suspense>
  )
}

export default Loadable
