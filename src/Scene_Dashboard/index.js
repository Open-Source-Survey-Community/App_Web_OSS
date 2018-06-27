import React from 'react';
import HeaderComponent from './header/components/index'
class DashBoard extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div id="main-wrapper">
            <HeaderComponent />
            <div className="page-wrapper container-fluid">
                  <h2>Aqui va el contenido del dashboard!!</h2>
            </div>
        </div>
      );
    }
}


export default DashBoard;