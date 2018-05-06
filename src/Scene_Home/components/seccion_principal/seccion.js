import React from 'react';


class SeccionPrincipal extends React.Component{
    render() {
      return (
        <section className="intro-section" id="welcome">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-md-offset-1 col-sm-12">
                        <div className="intro_text">
                            <h1>Welcome to <span> Open Source Survey </span> Web App</h1>
                            <br />
                            <p>Available with App store and play store </p>
                            <div className="buttons scroll-to">
                                <a href="#features" className="btn btn-lg btn-light-dark ">I want respond some surveys!!<i className="fa fa-angle-down"></i></a>
                                <a href="#download" className="btn btn-lg btn-skin ">Join Our Academic Community!!<i className="fa fa-cloud-download"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="iphone_holder">
                            <div className="iphone_inner flexslider">
                                <div className="iphone_slider">
                                    <ul className="slides">
                                        <li><img src="images/1.jpg" alt="" className="img-responsive" /></li>
                                        <li><img src="images/2.jpg" alt="" className="img-responsive" /></li>
                                        <li><img src="images/3.jpg" alt="" className="img-responsive" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
}

export default SeccionPrincipal;