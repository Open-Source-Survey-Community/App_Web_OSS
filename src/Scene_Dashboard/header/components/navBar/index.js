import React, { Component } from 'react'
import SearchBarComponent from '../searchBar/index'
import ProfileComponent from '../profileBar/index'
import MessageComponent from '../messageBar/index'
import NotificationsComponent from '../notificationsBar/index'
import MenuComponent from '../menuBar/index'
import LanguageComponent from '../languageBar/index'

class NavbarComponent extends Component {

  render() {
    let editarAlturaheader = {
      height : '30px'
    }
    return (
      <div>
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">
                                <b>
                                    <img src="../assets/images/logo-icon.png" alt="OSS" className="dark-logo" />
                                    <img src="../assets/images/logo-light-icon.png" alt="" className="light-logo" />
                                </b>
                                <span>
                                <img src="../assets/images/logo-text.png" alt="" className="dark-logo" />
                                <img src="../assets/images/logo-light-text.png" className="light-logo" alt="" /></span> </a>
                </div>
                <div className="navbar-collapse" style={editarAlturaheader}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" ><i className="ti-menu"></i></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"><i className="ti-menu"></i></a> </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                      <SearchBarComponent />
                      <li className="nav-item dropdown">
                        <MessageComponent />
                      </li>
                      <li className="nav-item dropdown">
                        <NotificationsComponent />
                      </li>
                      <li className="nav-item dropdown mega-dropdown">
                          <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-view-grid"></i></a>
                        <MenuComponent />
                      </li>
                      <LanguageComponent />
                      <ProfileComponent />
                    </ul>
                </div>
        </nav> 
      </div>
    )
  }
}

export default NavbarComponent
