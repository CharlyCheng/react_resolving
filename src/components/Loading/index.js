import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import './index.scss'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <div className='bk_loading_content'>
        <svg className='loading_icon' id="loading" viewBox="0 -2 59.75 60.25" width="100%" height="100%"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"></path><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"></path></svg>
      </div>
    )
  }
}

export default Loading