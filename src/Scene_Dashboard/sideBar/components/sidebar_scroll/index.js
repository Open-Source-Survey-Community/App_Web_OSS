import React, { Component } from 'react'

class SideBarScrollComponent extends Component {

  render() {
    return (
      <div>
        <nav className="sidebar-nav">
            <ul id="sidebarnav">
                <li className="user-profile"> <a className="has-arrow waves-effect waves-dark"  aria-expanded="false"><img src="../assets/images/users/profile.png" alt="user" /><span className="hide-menu">Steave Jobs </span></a>
                    <ul aria-expanded="false" className="collapse">
                                <li><a>View my questions reviews's</a></li>
                                <li><a>View my survies reviews's</a></li>
                                <li><a>View my questions status's</a></li>
                                <li><a>View Colaborators</a></li>
                    </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">APP</li>
                <li> <a className="has-arrow waves-effect waves-dark"  aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Activities<span className="label label-rouded label-themecolor pull-right">2</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Question Portal's</a></li>
                                <li><a href="index2.html">Survey Portal's</a></li>
                            </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Actions<span className="label label-rouded label-themecolor pull-right">2</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Create new Question</a></li>
                                <li><a href="index2.html">Create new Survey</a></li>
                            </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark"  aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Question<span className="label label-rouded label-themecolor pull-right">2</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Handle my questions</a></li>
                                <li><a href="index2.html">Handle issues question's</a></li>
                            </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark"  aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Survey<span className="label label-rouded label-themecolor pull-right">4</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="index.html">Handle my surveys</a></li>
                                <li><a href="index2.html">Handle collaborators</a></li>
                                <li><a href="index2.html">Handle issues survies's</a></li>
                                <li><a href="index2.html">Handle results of my survies</a></li>
                            </ul>
                </li>

            </ul>
        </nav>
      </div>
    )
  }
}

export default SideBarScrollComponent
