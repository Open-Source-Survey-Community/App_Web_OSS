import React from 'react';
import HeaderComponent from './header/components/index'
import SidebarComponent from './sideBar/index'
class DashBoard extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div id="main-wrapper">
            <HeaderComponent />
            <SidebarComponent />
            <div className="page-wrapper">
                <div className="container-fluid r-aside">
                  <h2>Aqui va el contenido del dashboard!!</h2>
                </div>
            </div>
        </div>
      );
    }
}


export default DashBoard;