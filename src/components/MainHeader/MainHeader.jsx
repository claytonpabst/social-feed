import React, {Component} from 'react'
import './MainHeader.css'

class MainHeader extends Component {
  constructor(){
    super()
  }

  //methods

  render(){
    return (
        <div className="header-wrapper">
          <h1 className="header-title">The Face Gram</h1>
        </div>
    )
  }
}

export default MainHeader