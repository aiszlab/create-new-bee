import { useRoutes } from 'react-router-dom';
var Routes = function (props) {
    // 路由渲染
    return useRoutes(props.routes);
};
export default Routes;
