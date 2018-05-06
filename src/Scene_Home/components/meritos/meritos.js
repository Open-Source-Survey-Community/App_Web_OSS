import React from 'react';
class Merito extends React.Component{
    render() {
      return (
        <div>
        <section className="aside_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="aside_features wow animated fadeInLeft">
                            <h1>Learn how it work?</h1>
                            <hr className="separator" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>                         
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="http://player.vimeo.com/video/57175742" title='video promocional curso'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }
}

export default Merito;