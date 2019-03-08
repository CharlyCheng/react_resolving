import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import { Provider } from 'react-redux';
import configureStore from './store'
const store = configureStore();

ReactDOM.render (
  // <Provider >
    <App store={store}/>,
  // </Provider>,
  document.getElementById('root')
)