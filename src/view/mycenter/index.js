import React, { Component} from 'react'
import './index.css'

class MyCenter extends Component {
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
        <div className='header'>个人中心</div>
        <div className='cc'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
      </div>
    )
  }
}

export default MyCenter