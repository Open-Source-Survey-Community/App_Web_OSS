import React from 'react';

class caracteristicaHome extends React.Component{
    render() {
      return (
        <div>
        <section className="aside_section light">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 wow animated fadeInLeft" data-wow-delay="0.2s">

                        <img src="images/iphone_shot_1.png" alt="" className="img-responsive" />

                    </div>
                    <div className="col-md-6">
                        <div className="aside_features">
                            <h1>Some of the top features</h1>
                            <hr className="separator" />
                            <div className="features-box-1">
                                <i className="pe-7s-add-user"></i>
                                <div className="features-box-1-text">
                                    <h3>Real use of SASS</h3>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                            <div className="features-box-1">
                                <i className="pe-7s-browser"></i>
                                <div className="features-box-1-text">
                                    <h3>Bower support</h3>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                            <div className="features-box-1">
                                <i className="pe-7s-phone"></i>
                                <div className="features-box-1-text">
                                    <h3>Fully responsive</h3>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>

                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }

}

export default caracteristicaHome;