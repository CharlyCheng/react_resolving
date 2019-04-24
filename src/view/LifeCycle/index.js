import React, { Component, createContext} from 'react'
import { Button } from 'antd-mobile'
import ChildTest from './ChildTest'
import ChildComponent1 from './ChildComponent1'
import { Provider } from '@src/store/context'


const storeVal = {
  msg: 'hello world!'
}

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'lcc',
      age: 19
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('我是getDerivedStateFromProps');
  }
  componentWillMount() {
    console.log(`我是componentWillMount`);
  }
  componentWillUnmount() {
    console.log(`我是componentWillUnmount`);
  }
  componentDidMount() {
    console.log(`我是componentDidMount`);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(`我是componentWillUpdate`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`我是componentDidUpdate${prevState}`);
  }
  componentWillReceiveProps(nextProps) {
    console.log(`我是componentWillReceiveProps`);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(`我是shouldComponentUpdate`);
    //如果更改之后的age和之前一样 返回false, 表示不重新渲染
    if (nextState.name === this.state.name) {
      return false;
    }
    return true;
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // Are we adding new items to the list?
  //   // Capture the scroll position so we can adjust scroll later.
  //   if (prevProps.list.length < this.props.list.length) {
  //     return (
  //       this.listRef.scrollHeight - this.listRef.scrollTop
  //     );
  //   }
  //   return null;
  // }


  handleEvent() {
    const newName = `hlt${Math.random()}`
    storeVal.msg = newName
    this.setState({
      name: newName
    })
  }
  ageChange(){
    const newName = `hlt${Math.random()}`
    this.setState({
      name: newName,
      age: 11
    })
  }
  render () {
    console.log(`我是render `);
    const { 
      name,
      age
    } = this.state
    return (
      <div className='one'>
        {name}
        <Button onClick={this.handleEvent.bind(this)} type='primary' className='catch_me'>来点我啊</Button>  
        <Provider value={storeVal}>
           <ChildComponent1 />
        </Provider>
        <ChildTest 
          name={name}
          age={age}
          handleEvent={this.ageChange.bind(this)}
        />
      </div>
    )
  }
}

export default LifeCycle