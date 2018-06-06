import React, { Component } from 'react'

class SearchBarComponent extends Component {
  constructor(props){
    super(props);
    this.showFormSeachUser = this.showFormSeachUser.bind(this);
    this.hideFormSeachUser = this.hideFormSeachUser.bind(this);
    this.state = {
      display: 'none'
    }
  }

  showFormSeachUser (){
    this.setState(prevState => ({
        display: 'block'
    }));
  }

  hideFormSeachUser (){
    this.setState({
      display:'none'
    })
  }

  render() {
    let displayForm ={
        display: this.state.display,
        width: '1290px',
        position : 'relative',
        left: '-313px',
        top: '-50px'
    }
    let styleSearch = {
      position: 'relative',
      top: '28px',
      padding: '0px 15px 0px 15px'

   }
    return (
      <div style={styleSearch}>
        <li className="nav-item hidden-xs-down search-box ">
            <a className="nav-link hidden-sm-down waves-effect waves-dark" href="javascript:void(0);" onClick= {this.showFormSeachUser}>
                <i className="ti-search"></i>
            </a>
            <form className="app-search " style={displayForm}>
                <input type="text" className="form-control" placeholder="Search & enter"/>
                <a className="srh-btn" onClick={this.hideFormSeachUser}>
                    <i className="ti-close"></i>
                </a>
            </form>
        </li>
      </div>
    )
  }
}

export default SearchBarComponent
