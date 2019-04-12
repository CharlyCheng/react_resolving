import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import configureStore from './store'
const store = configureStore();
import 'antd-mobile/dist/antd-mobile.less'


ReactDOM.render (
  // <Provider >
    <App store={store}/>,
  // </Provider>,
  document.getElementById('root')
)