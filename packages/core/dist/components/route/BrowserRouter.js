import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
export default (function (props) {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { routes: props.routes }) }));
});
