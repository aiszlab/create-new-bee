import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import { ProviderProps } from 'react-redux';
import Loadable from './libs/Loadable';
/**
 * 插件枚举
 */
export declare enum PluginType {
    Store = "store"
}
interface FoundationProps {
    store: ProviderProps['store'] | false;
    isStrict: boolean;
}
declare type Props = ({
    routes: RouteObject[];
} | {
    routes: false;
    children: ReactNode;
}) & FoundationProps;
/**
 * 渲染器
 */
export declare const boorstrap: (props: Props) => Promise<void>;
/**
 * Loadable 组件
 */
export { Loadable };
