import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export const RouteWithSubRoutes = (route) => (
  <Route 
    path={route.path}
    exact={route.exact}
    render={props => (
    // 把自路由向下传递来达到嵌套。
      <route.component {...props} routes={route.routes}/>
  )}/>
)

export const RenderRoutes = ({routes}) => {
  console.log('====================================');
  console.log('routes', routes);
  console.log('====================================');
  return (routes.map((route, i) => 
    <RouteWithSubRoutes key={i} {...route} />)
  )
};
