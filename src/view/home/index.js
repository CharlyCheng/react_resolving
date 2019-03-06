import React, { Component} from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../store/homeList/actions'
import './index.scss'

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
      console.log('====================================');
    console.log(this.props.homeList);
    console.log('====================================');
    })
    
    
  }
  render () {
    return (
      <div className='one1'>
        <div className='header'>主页面111</div>
        <div className='cc'>
          <div className='left'>{this.props.homeList.name}</div>
          <div className='right'></div>
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