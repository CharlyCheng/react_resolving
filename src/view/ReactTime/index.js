import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/homeList/actions'
import './index.scss'

class ReactTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0
    }
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 没错，这是一个static
    console.log('getDerivedStateFromProps');
    // console.log('====================================');
    // console.log('nextProps', nextProps, 'prevState', prevState);
    // console.log('====================================');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  componentWillUpdate(nextProps, nextState) {
  	console.log('componentWillUpdate');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // console.log('====================================');
    // console.log('prevProps', prevProps, 'prevState', prevState, 'snapshot', snapshot);
    // console.log('====================================');
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render () {
    console.log('====================================');
    console.log('render');
    console.log('====================================');
    const { 
      val
    } = this.state
    return (
      <div className='reactLongList'>
        { val }
      </div>
    )
  }
}

export default ReactTime