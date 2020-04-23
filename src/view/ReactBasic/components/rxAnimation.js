import React, { Component } from 'react'
import '../index.scss'

class RxAnimation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: false,
      isOut: false,
      roateDeg: 1
    }
  }

  typeClass() {
    const { isShow, isOut } = this.state
    
    return `basic ${isShow ? 'basic_animation_right':''} ${isOut ? 'basic_animation_rightout':''}`
  }

  handleClick() {
    const { isShow } = this.state
    
    this.setState({
      isShow: !isShow,
      isOut: isShow,
      roateDeg: 7200 //转个7200度
    })
  }
  
  // 监听动画转盘转完后，恢复到最初值
  handleTransitionEnd() {
    console.log('====================================');
    console.log('111');
    console.log('====================================');
    this.setState({
      roateDeg: 0
    })
  }

  render() {
    const { roateDeg } = this.state

    return (
      <div className='animation_ctn'>
        <div>
          <div className="DrawRightSwitch"  onClick={this.handleClick.bind(this)}>打开滑动滑出的抽屉</div>
          <div className={this.typeClass()}></div>
        </div>
        <div className='roate_transform' onTransitionEnd={this.handleTransitionEnd.bind(this)} style={{transform: (roateDeg ? `rotate(${roateDeg}deg)`: `${roateDeg}`)}}>一直转的</div>
        <div className='move-animate-div'>我是一棵树</div>
      </div>
    )
  }
}

export default RxAnimation