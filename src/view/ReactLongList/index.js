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
  getList(list, num){
    let item = {
      'name': '爱你的一只猫爱你的一只猫爱你的一只猫爱你的一只猫爱你的一只猫爱你的一只猫爱你的一只猫',
      'age': '基本操作'
    }
    for (let i = 0; i < num; i++) {
      list.push(item)
    }
    this.setState( {
      list: list
    })
  }
  componentDidMount() {
    this.getList([], 100)
  }

  render () {
    const { list } = this.state
    return (
      <div className='reactLongList'>
        {
          list.map ( (item,index) => {
            return <div className='house_text'>{index}.{item.name}{item.age}</div>
          })
        }
      </div>
    )
  }
}

export default ReactLongList