import React, { Component } from 'react'
import '../../../style.css';

class ProfileComponent extends Component {
  render() {
    let styleProfile = {
        position: 'relative',
        top: '28px',
        padding: '0px 15px 0px 15px'

     }
    return (
      <div>
        <li className="nav-item dropdown" style={styleProfile}>
                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY mostrarMenuProfile">
                        <ul className="dropdown-user">
                                <li>
                                    <div className="dw-user-box">
                                        <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user" /></div>
                                        <div className="u-text">
                                            <h4>Steave Jobs</h4>
                                            <p className="text-muted">varun@gmail.com</p>
                                            <a href="pages-profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                        </div>
                                    </div>
                                </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a><i className="ti-user"></i> My Profile</a></li>
                                    <li><a><i className="ti-wallet"></i> Academic Profile</a></li>
                                    <li><a><i className="ti-email"></i>Inbox</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a><i className="ti-settings"></i> Account Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </div>
            </li>
      </div>
    )
  }
}

export default ProfileComponent
