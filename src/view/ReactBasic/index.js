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
    const rightOne = document.getElementById('rightOne')

    rightOne.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
      console.log(2); 
    }, false); 

    this.handleRequestAnimation()
  }

  handleClick() {
    const { isShow } = this.state

    this.setState({
      isShow: !isShow,
      isOut: isShow
    })
  }

  // 每隔两秒输出一个log
  handleLog(name) {
    this.name = name
  }

  // requestAnimation 实现动画
  handleRequestAnimation() {
    const animateDiv = document.querySelector('.animate-div')
    let start = null

    // 回调函数
    function step(timestamp) {
      console.log('11');
      
        if (!start) start = timestamp
        let progress = timestamp - start
        console.log('animateDiv.style', animateDiv.style.left);
        
        animateDiv.style.left = progress + 'px'
        if (progress < 350) {
            // 在动画没有结束前，递归渲染
            window.requestAnimationFrame(step)
        }
    }

    // 第一帧渲染
    window.requestAnimationFrame(step)
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
        <div id="rightOne" className={`basic ${this.state.isShow ? 'basic_animation_right': ''} ${this.state.isOut  ? 'basic_animation_rightout': ''}`}></div>
        <div className='roate_transform'>1111</div>
        <div className='animate-div'>2222</div>
      </React.Fragment>
    )
  }
}

export default ReactBasic