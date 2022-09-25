import {
  Suspense,
  lazy,
  ReactNode,
  useMemo,
  ComponentType,
  LazyExoticComponent,
  ComponentProps,
  ComponentPropsWithRef
} from 'react'

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
  const injections = useMemo<any>(() => {
    return props.injections
  }, [props.injections])

  return (
    <Suspense fallback={fallback}>
      <Component {...injections} />
    </Suspense>
  )
}

export default Loadable
