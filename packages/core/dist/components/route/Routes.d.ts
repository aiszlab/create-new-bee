/// <reference types="react" />
import { RouteObject } from 'react-router-dom';
interface Props {
    routes: RouteObject[];
}
declare const Routes: (props: Props) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
export default Routes;
