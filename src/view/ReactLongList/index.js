import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/homeList/actions'
import './index.scss'

class ReactLongList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  
  scrollToAnchor(anchorName){
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { 
          // anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); 
          // window.scrollTo(0, anchorElement.offsetTop - window.innerHeight / 2);
        }
    }
  }

  componentDidMount() {
    
  }

  render () {
    const { list } = this.state
    //函数定义
    return (
      <div className='reactLongList'>
        <div className="next_ctn"></div>
        <div className="Tabs" onClick={this.scrollToAnchor.bind(this, 'activity2')}>11111</div>
        <div className="next_ctn"></div>
        <div id='activity1' className="next_ctn——11">我是11111</div>
        <div id='activity2' className="next_ctn——11">我是2222</div>
      </div>
    )
  }
}

export default ReactLongList