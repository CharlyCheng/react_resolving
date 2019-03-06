import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export const RouteWithSubRoutes = (route) => (
  <Switch>
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => (
      // 把自路由向下传递来达到嵌套。
        <route.component {...props} routes={route.routes}/>
    )}/>
  </Switch>
)

export const RenderRoutes = ({routes}) => {
  return (routes.map((route, i) => 
    <RouteWithSubRoutes key={i} {...route} />)
  )
};
