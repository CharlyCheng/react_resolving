import React, { Component} from 'react'
import './index.css'
import { RenderRoutes } from '../../common/routerUntil'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'
import routeData from './routeData' 
class MyCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    
  }
  render () {
    return (
        <div className='one'>
        <div className='header'>个人中心</div>
        <Link to='/mycenter/coupon'>个人中心</Link>
        <div className='cc'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
        <RenderRoutes routes={routeData}></RenderRoutes>
      </div>
    )
  }
}

export default MyCenter