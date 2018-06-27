import React, { Component } from 'react'
import '../../../style.css';

class MessageComponent extends Component {
  render() {
    let styleMessage = {
        position: 'relative',
        top: '28px',
        padding: '0px 15px 0px 15px'

     }
    return (
      <div style={styleMessage}>
        <a className="nav-link dropdown-toggle waves-effect waves-dark"  id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email"></i>
            <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
        </a>
            <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown mostrarMenuMensajes" aria-labelledby="2">
                <ul>
                    <li>
                        <div className="drop-title">You have 4 new messages</div>
                    </li>
                    <li>
                        <div className="message-center">
                            <a>
                                <div className="user-img">
                                    <img src="" alt="user" className="img-circle"/>
                                    <span className="profile-status online pull-right"></span>
                                </div>
                                    <div className="mail-contnet">
                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> 
                                    </div>
                            </a>
                            <a>
                                <div className="user-img">
                                    <img src="" alt="user" className="img-circle"/>
                                    <span className="profile-status online pull-right"></span>
                                </div>
                                    <div className="mail-contnet">
                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> 
                                    </div>
                            </a>
                            <a>
                                <div className="user-img">
                                    <img src="" alt="user" className="img-circle"/>
                                    <span className="profile-status online pull-right"></span>
                                </div>
                                    <div className="mail-contnet">
                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> 
                                    </div>
                            </a>
                            <a>
                                <div className="user-img">
                                    <img src="" alt="user" className="img-circle"/>
                                    <span className="profile-status online pull-right"></span>
                                </div>
                                    <div className="mail-contnet">
                                        <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> 
                                    </div>
                            </a>
                        </div>
                    </li>
                            <li>
                                <a className="nav-link text-center" > <strong>Check all Messages</strong> <i className="fa fa-angle-right"></i> </a>
                            </li>
                </ul>
            </div>
      </div>
    )
  }
}

export default MessageComponent
