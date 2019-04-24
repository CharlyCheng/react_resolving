import React, { Component} from 'react'
import { Button } from 'antd-mobile'
import { Consumer } from '@src/store/context'
class ChildComponent1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('====================================');
    console.log('prevState', prevState);
    console.log('====================================');
    console.log('====================================');
    console.log('nextProps', nextProps);
    console.log('====================================');
    if (nextProps.age !== prevState.age) {
        return {
          age: nextProps.age
        }
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
  // componentWillReceiveProps(nextProps) {
  //   console.log(`我是child componentWillReceiveProps`);
  // }
 
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(`我是child shouldComponentUpdate`);
  //   return true
  // }
  handleEvent() {
    
  }
  render () {
    console.log(`我是child render `);
    const { 
      age
    } = this.state
    return (
      <div className='one'>
          <Consumer>
            {context => <p>{context.msg}</p>}
          </Consumer>
      </div>
    )
  }
}

export default ChildComponent1