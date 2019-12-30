import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Provider } from 'react-redux';
import routes from './routes'

const RouteWithSubRoutes = (route) => (
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

const RenderRoutes = ({routes}) => {
  return (routes.map((route, i) => 
    <RouteWithSubRoutes key={i} {...route} />)
  )
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  componentDidMount() {
    
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <RenderRoutes routes={routes}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App