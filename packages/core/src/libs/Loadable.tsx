import { Suspense, lazy, ReactNode, useMemo, ComponentType } from 'react'

interface Props<P> {
  factory: () => Promise<{ default: ComponentType<P> }>
  fallback?: ReactNode
  injections?: P
}

const Loadable = <P,>(props: Props<P>) => {
  /**
   * fallback
   */
  const fallback = useMemo(() => props.fallback, [props.fallback])

  /**
   * path
   */
  const Component = useMemo(() => lazy(props.factory), [props.factory])

  /**
   * injections
   */
  const injections = useMemo(() => {
    return props.injections
  }, [props.injections])

  return (
    <Suspense fallback={fallback}>
      {/* TODO i don't have any idea to resolve this ts problem */}
      {/* TODO if someone could resolve this, very thanks */}
      {/* @ts-ignore */}
      <Component {...injections} />
    </Suspense>
  )
}

export default Loadable
