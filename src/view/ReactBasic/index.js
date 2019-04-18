import React, { Component} from 'react'
import axios from 'axios'
import { Button } from 'antd-mobile'

class ReactBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    
  }

  requestHandler(){
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.get('http://localhost:8096/api/send_sms/ok', {
      params: {
        ID: 12345
      }
    })
    .then((res) => {
      this.setState({
        name: res.data.name
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render () {
    const { name } = this.state
    return (
      <div className='one'>
        <Button onClick={this.requestHandler.bind(this)} type='primary' className='catch_me'>点我发起请求喽</Button>  
        <span style={{'font-size': '20px', color: 'red'}}>{name}</span>
      </div>
    )
  }
}

export default ReactBasic