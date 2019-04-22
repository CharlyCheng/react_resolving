import React, { Component} from 'react'
import { Button } from 'antd-mobile'

class ChildTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentWillMount() {
    console.log(`我是child  componentWillMount`);
  }
  componentWillUnmount() {
    console.log(`我是child componentWillUnmount`);
  }
  componentDidMount() {
    console.log(`我是child componentDidMount`);
  }
  componentWillUpdate(prevProps, prevState) {
    console.log(`我是child componentWillUpdate`);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`我是child componentDidUpdate`);
  }
  componentWillReceiveProps(nextProps) {
    console.log(`我是child componentWillReceiveProps`);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(`我是child shouldComponentUpdate`);
  //   return true
  // }
  handleEvent() {
    
  }
  render () {
    console.log(`我是child render `);
    const { 
      
    } = this.state
    return (
      <div className='one'>
          Name: {this.props.name}
          Age: {this.props.age}
          <Button onClick={this.props.handleEvent.bind(this)} type='primary' className='catch_me'>child来点我啊</Button>  
      </div>
    )
  }
}

export default ChildTest