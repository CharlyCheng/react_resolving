import React, { Component } from 'react'
import _ from 'lodash'
import BookItem from './BookItem'
import '../../index.scss'

/*
第一种方案：dom滑动至可视区域，印入脑海的第一种方案是监听滚动事件，通过Element.getBoundingClientRect() 计算目标元素与视图的位置
缺点: getBoundingClientRect Api会引起回流，造成性能问题
有点：简单，一上，先试下
*/ 
/*
第二种方案：
缺点: 
有点：解决性能问题
https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
*/ 

class ExposureTrack extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.handleScroll = this.handleScroll.bind(this)
    // 使用函数防抖包装滚动函数
    this.debounceScroll = _.debounce(this.handleScroll, 500)
    this.handleSendView = this.handleSendView.bind(this)
    this.isInView = this.isInView.bind(this)
  }
  
  isInView(elm) {
    const el = document.getElementById(elm)
    if (!el) {
      return false
    }
    const offsetTop = el.offsetTop
    const totalHeight = document.documentElement.clientHeight;
    // const totalWidth = document.documentElement.clientWidth;
    const scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);
    // const scrollLeft = document.documentElement.scrollLeft;
    //最底部display为none的div及其子元素也是在页面中,且是页面的最后,-1就是防止这些元素返回true
    const po = (offsetTop + el.clientHeight)-1;
    // if ((po <= scrollTop + totalHeight) && po >= scrollTop && (lo <= scrollLeft + totalWidth) ) {
    if ((po <= scrollTop + totalHeight) && po >= scrollTop) {
      return true;
    }
    return false;
  }

  handleScroll() {
    if (this.isInView('top-view-1')) {
      console.log('我进来了');
    }
  }

  handleSendView() {
    console.log('handleSendView', '发送埋点');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debounceScroll)
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.debounceScroll)
  }
  

  render() {
 
    return (
      <React.Fragment>
        <div id="top-view-1" className="">你看不见我1</div>
        <div className="top-view-2">
          <BookItem
            index={0}
            subItem={{
              'bookId': 1,
              'bookName': '哈哈',
              'cover': 'http://img.ljcdn.com/growth-activity/1587718559712.jpeg'
            }}
            eventId='07_learnmaterial_materiallist_show' // 埋点事件ID
            eventParam={{city: '1111'}} // 埋点参数
          />
        </div>
      </React.Fragment>
    )
  }
}

export default ExposureTrack