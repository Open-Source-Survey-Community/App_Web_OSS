import React from 'react';

class SeccionSecundaria extends React.Component{
    render() {
      return (
        <div>
          <section id="features" className="features-section">
            <div className="container">
                <div className="section_heading">
                    <h3>Amazing features</h3>
                    <hr className="separator" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>Responsive Design</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="text">
                                <h3>Bootstrap3</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>Responsive Design</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-md-4">
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
                    <div className="col-md-4">
                        <div className="feature-left">
                            <div className="icon">
                                <i className="fa fa-flag"></i>
                            </div>
                            <div className="text">
                                <h3>400+ icon fonts</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="feature-left">
                            <div className="icon">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="text">
                                <h3>Bootstrap3</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="feature-left">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>Responsive Design</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>                           
                        </div>
                        <div className="clearfix">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
      );
    }

}

export default SeccionSecundaria;