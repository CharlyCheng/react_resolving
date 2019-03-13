import React, { Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { RenderRoutes } from '../common/routerUntil'
import { Provider } from 'react-redux';
import configureStore from '../store'
import routes from './routes'
import {
  Home,
  MyCenter,
  Coupon,
  Hello
} from '../view'

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
            {/* <RenderRoutes routes={routes}/> */}
            <Route exact path="/" component={Home} />
            <Route exact path='/mycenter' component={MyCenter}/>
            <Route exact path='/mycenter/coupon' component={Coupon}/>
            <Route exact path='/tstest' component={Hello}/>

          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App