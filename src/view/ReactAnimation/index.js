import React, { Component} from 'react'
import _ from "lodash"
import './index.scss'

class ReactBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isOut: false,
      dzCtn: [1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11]
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
    const { dzCtn } = this.state
    // css实现动画，怎么让它执行完这个去执行另外一个keyFrame，你怎么知道这个动画什么时候结束
    return (
      <div className='animation_ctn'>
        <div onClick={this.handleClick.bind(this)}>打开滑动滑出的抽屉</div>
        <div id="rightOne" className={`basic ${this.state.isShow ? 'basic_animation_right': ''} ${this.state.isOut  ? 'basic_animation_rightout': ''}`}></div>
        <div className='roate_transform'>打开转动</div>
        <div className='roate_transform' style={{transform: `rotate(${720})`}}>一直转的</div>
        <div className='animate-div'>动起来</div>
        <div className='move-animate-div'>我是一棵树</div>

        <div className='dianzan'>点赞</div>
        <div class="praise_bubble">
          {
            dzCtn.map((item,index) => {
              return (
                <div class={`bubble b${index+1} bl${index+1}`}></div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ReactBasic