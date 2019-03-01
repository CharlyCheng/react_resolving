import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Home } from '../view'

class router extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default router