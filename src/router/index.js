import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { RenderRoutes } from '../common/routerUntil'
import routes from './routes' 
import { 
  Home, 
  MyCenter,
  Coupon
} from '../view'

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
            {/* <Route exact path="/" component={Home} />
            <Route path='/mycenter' component={MyCenter}/> */}
          </Switch>
        </Router>
    )
  }
}

export default HomeRouter