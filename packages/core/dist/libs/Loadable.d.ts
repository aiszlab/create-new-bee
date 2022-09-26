import { ReactNode, ComponentType } from 'react';
interface Props<P> {
    factory: () => Promise<{
        default: ComponentType<P>;
    }>;
    fallback?: ReactNode;
    injections?: P;
}
declare const Loadable: <P>(props: Props<P>) => JSX.Element;
export default Loadable;
