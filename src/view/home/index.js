import React, { Component} from 'react'
import { connect } from 'dva'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log('====================================');
    console.log('111');
    console.log('====================================');
  }
  render () {
    return (
      <div className='one'>
        <div className='header'>哎</div>
        <div className='cc'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
      </div>
    )
  }
}

export default Home