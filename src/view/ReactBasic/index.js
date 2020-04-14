import React, { Component} from 'react'
import _ from "lodash"
import './index.scss'

class ReactBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isOut: false
    }
  }

  componentDidMount() {
    
  }

  handleClick() {
    const { isShow } = this.state

    this.setState({
      isShow: !isShow,
      isOut: isShow
    })
  }

  typeClass() {
    const { isShow, isOut } = this.state
    return isShow ? `basic basic_animation_right`: `basic basic_animation_rightout`
  }

  render () {
    // css实现动画，怎么让它执行完这个去执行另外一个keyFrame，你怎么知道这个动画什么时候结束
    return (
      <React.Fragment>
        <div onClick={this.handleClick.bind(this)}>打开</div>
        <div className={`basic ${this.state.isShow ? 'basic_animation_right': ''} ${this.state.isOut  ? 'basic_animation_rightout': ''}`}></div>
        <div className='roate_transform'>1111</div>
      </React.Fragment>
    )
  }
}

export default ReactBasic