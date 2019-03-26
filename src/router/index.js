import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  hashHistory
} from 'react-router-dom'
import { RenderRoutes } from '../common/routerUntil'
import { Provider } from 'react-redux';
import configureStore from '../store'
import routes from './routes'


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
        <Router history={hashHistory}>
          <Switch>
            <RenderRoutes routes={routes}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App