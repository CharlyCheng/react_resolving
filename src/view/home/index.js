import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/homeList/actions'
import './index.scss'
const throlle = (fn, delay=2000) => {
  let last = 0
  return function () {
    const content = this
    const args = arguments
    let now = +new Date()
    if (now - last >= delay) {
      last = now;
      fn.apply(content, args);
    }
  }
}
const debounceThrolle = (fn, delay=800) => {
  let last = 0, timer
  return function () {
    const content = this
    const args = arguments
    let now = +new Date()
    if ( now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(function(){
        last = now
        fn.apply(content, args)
      }, delay)
    } else {
      last = now
      fn.apply(content, args)
    }
    if (timer){
      clearTimeout(timer)
    }
    timer = setTimeout(function(){
      fn.apply(content)
    },delay)
  }
}
const debounce = (fn, delay=2000) => {
  let timer
  return function () {
    const content = this
    if (timer){
      clearTimeout(timer)
    }
    timer = setTimeout(function(){
      fn.apply(content)
    },delay)
  }
}
const noDo = debounceThrolle(() => {
  console.log('====================================');
  console.log('1111');
  console.log('====================================');
})

const doFd = debounce(() => {
  console.log('====================================');
  console.log('2222');
  console.log('====================================');
})

const doJl = throlle(() => {
  console.log('====================================');
  console.log('3333');
  console.log('====================================');
})



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    // 更新用户信息
    new Promise ( (resolve, reject) => {
      dispatch(setUser({'name': 'lcc'}, resolve));
    }).then(res => {
    //   console.log('====================================');
    // console.log(this.props.homeList);
    // console.log('====================================');
    })
    // const aaa = document.getElementById('aaa')
    // const cc_one = document.getElementById('cc_one')
    // console.log('====================================');
    // console.log('aaa', aaa);
    // console.log('====================================');

    // aaa.addEventListener('click',(event) =>{
    //   event.stopPropagation()
    //   console.log('冒泡')
    // },true);
    // aaa.addEventListener('click',(event) =>{
    //   console.log('捕获 ')
    // },false)

  //   var arr = [1,2,3]
  //   var arr2 = arr.reduce((pre, next) => {
  //     return pre + next
  //   })
  //  
    let arr = [1,2,3,4];
    let arr2= arr.forEach((item, index, array) => {
      item = item + 1
    })
    console.log('====================================');
   console.log(arr, arr2);
   console.log('====================================');
  }

  render () {
    return (
      <div className='one1' id='cc_one'>
        <div className='header' id='aaa'>主页面1222211</div>
        {/* <div className='cc'>
          <div className='left'>{this.props.homeList.name}</div>
          <div className='right'></div>
        </div> */}
        <div className='aaaa' >
        <div className='top'></div>
        <div className='left'></div>
        <div className='right'></div>
        <div className='bottom'></div>
        </div>
        <div className='flex-test'>
          <div className='flex-item'>11111</div>
        </div>
        <div>
          <span>不防抖不节流防抖的input</span>
          <input onKeyUp = {() => noDo()} type='text' />
        </div>
        <div>
          <span>防抖的input</span>
          <input onKeyUp = {() => doFd()} type='text' />
        </div>
        <div>
          <span>节流的input</span>
          <input onKeyUp = {() => doJl()}  type='text' />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // state 是 {userList: [{id: 0, name: '王二'}]}
  // 将user加入到改组件中的props当中
  return {
    homeList: state.homeList
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increase: (...args) => dispatch(actions.increase(...args)),
//     decrease: (...args) => dispatch(actions.decrease(...args))
//   }
// }

export default connect(mapStateToProps)(Home);

// export default Home