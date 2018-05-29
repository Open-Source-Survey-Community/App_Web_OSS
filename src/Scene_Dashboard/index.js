import React from 'react';
import LoadingComponent from '../animation/loading/index'
class DashBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded_dashboard: false
    }
  }
   componentDidMount(){
    this.setState({loaded_dashboard: true});
   }
    render() {
      return (
        <div>
        {this.state.loaded_dashboard === false ?  <LoadingComponent description="information User" />:null }        
          hola estas en dashboard
        </div>
      );
    }
}


export default DashBoard;