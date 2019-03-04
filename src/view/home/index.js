import React, { Component} from 'react'
import './index.css'

class Home extends Component {
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
        <div className='header'>主页面</div>
        <div className='cc'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
      </div>
    )
  }
}

export default Home