import React, { Component } from 'react'
import './index.scss'

class setState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0
    }
  }

  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    }, () => {
      console.log('====================================');
      console.log('a', this.state.val);
      console.log('====================================');
    })
    console.log('====================================');
    console.log(this.state.val);
    console.log('====================================');
    this.setState({
      val: this.state.val + 1
    })
    console.log('====================================');
    console.log(this.state.val);
    console.log('====================================');
    setTimeout(() => {
      this.setState({
        val: this.state.val + 1
      })
      console.log('====================================');
      console.log(this.state.val);
      console.log('====================================');
      this.setState({
        val: this.state.val + 1
      })
      console.log('====================================');
      console.log(this.state.val);
      console.log('====================================');
    },0);
  }

  render () {
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

export default setState