import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import routes from './routes' 

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
  return (routes.map((route, i) => 
    <RouteWithSubRoutes key={i} {...route} />)
  )
};

class HomeRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
        <Router>
          <Switch>
            <RenderRoutes routes={routes}/>
             {/* <Route path={} Component={}/> */}
          </Switch>
        </Router>
    )
  }
}

export default HomeRouter