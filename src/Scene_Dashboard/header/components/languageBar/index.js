import React, { Component } from 'react'

class LanguageComponent extends Component {

  render() {
    let styleLanguage = {
       position: 'relative',
       top: '28px',
       padding: '0px 15px 0px 15px'
    }
    return (
      <div>
        <li className="nav-item dropdown" style={styleLanguage}>
                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us"></i></a>
                    <div className="dropdown-menu dropdown-menu-right animated bounceInDown"> 
                        <a className="dropdown-item" ><i className="flag-icon flag-icon-es"></i> Spanish</a>
                        <a className="dropdown-item" ><i className="flag-icon flag-icon-us"></i>US</a>  
                    </div>
        </li>
      </div>
    )
  }
}

export default LanguageComponent
