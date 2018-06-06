import React, { Component } from 'react'
import SideBarScrollComponent from './components/sidebar_scroll/index';
class SidebarComponent extends Component {
  render() {
    return (
      <div>
        <aside className="left-sidebar"> 
            <div className="scroll-sidebar">
                <SideBarScrollComponent />
            </div>
        </aside>
      </div>
    )
  }
}

export default SidebarComponent
