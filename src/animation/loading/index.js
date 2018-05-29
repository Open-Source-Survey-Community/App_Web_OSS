import React, { Component } from 'react'

export class LoadingComponent extends Component { 
  render() {
    return (
    <div className="preloader">
        <div className="loader">
            <div className="loader__figure"></div>
            <p className="loader__label">Loading {this.props.description}</p>
        </div>
    </div>
    )
  }
}

export default LoadingComponent
