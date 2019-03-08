import React, { Component} from 'react'
import './index.css'

class Coupon extends Component {
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
        <div className='header'>优惠券</div>
        <div className='cc'>
          <div className='left'></div>
          <div className='right'></div>
        </div>
      </div>
    )
  }
}

export default Coupon