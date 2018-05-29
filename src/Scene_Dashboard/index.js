import React from 'react';
import LoadingComponent from '../animation/loading/index'
class DashBoard extends React.Component {
    render() {
      return (
        <div>
         <LoadingComponent description="information User" />
          hola estas en dashboard
        </div>
      );
    }
}


export default DashBoard;