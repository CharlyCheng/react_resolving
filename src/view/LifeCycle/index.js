import React, { Component} from 'react'
import { Button } from 'antd-mobile'

let count = 0
const log = function(e){
  console.log(this)
  console.log(e)
  ++count
  console.log(count)
}
const throttle = function (fn, delay) {
  let preTime = 0;
  return function () {
      const context = this;
      const args = arguments;
      const now = +new Date();
      if (now - preTime > delay) {
          fn.apply(context, args);
          preTime = now;
      }
  }
}

class MyCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  go(){
    ++count
    console.log(count)
  }
  componentDidMount() {
    
  }

  render () {
    return (
      <div className='one'>
        <Button onClick={throttle(log.bind(this, event), 1000, true)} type='primary' className='catch_me'>来点我啊</Button>  
      </div>
    )
  }
}

export default MyCenter