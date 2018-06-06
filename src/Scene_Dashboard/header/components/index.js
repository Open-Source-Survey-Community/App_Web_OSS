import React, { Component } from 'react'
import NavbarComponent from './navBar/index'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="topbar">
            <NavbarComponent />  
        </header>
      </div>
    )
  }
}
