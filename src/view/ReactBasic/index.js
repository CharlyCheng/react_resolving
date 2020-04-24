/*
  RxAnimation: react动画模块,包括css、canvas等
*/

import React, { Component} from 'react'
import _ from "lodash"
import RxAnimation from './components/rxAnimation'
import ExposureTrack from './components/ExposureTrack/index'
import './index.scss'

class ReactBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    return (
      <div className="react-basic-ctn">
        <RxAnimation />
        <ExposureTrack />
      </div>
    )
  }
}

export default ReactBasic