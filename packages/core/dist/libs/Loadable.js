var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, lazy, useMemo } from 'react';
var Loadable = function (props) {
    /**
     * fallback
     */
    var fallback = useMemo(function () { return props.fallback; }, [props.fallback]);
    /**
     * path
     */
    var Component = useMemo(function () { return lazy(props.factory); }, [props.factory]);
    /**
     * injections
     */
    var injections = useMemo(function () {
        return props.injections;
    }, [props.injections]);
    return (_jsx(Suspense, __assign({ fallback: fallback }, { children: _jsx(Component, __assign({}, injections)) })));
};
export default Loadable;
