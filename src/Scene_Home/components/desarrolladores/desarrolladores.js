import React from 'react';
class Contribuidores extends React.Component{
    render() {
      return (
        <div>
           <section id="download" className="download-section">
            <div className="container">
                <div className="section_heading">
                    <h3>Behind the app</h3>
                    <hr className="separator" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="person-col">
                            <img src="images/team-1.jpg" alt="" className="img-responsive" />
                        </div>
                        <h3>Victoria</h3>
                         <em>Developer</em>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="person-col">
                            <img src="images/team-2.jpg" alt="" className="img-responsive" />
                        </div>
                        <h3>Smith</h3>
                        <em>Designer</em>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="person-col">
                            <img src="images/team-3.jpg" alt="" className="img-responsive" />
                        </div>
                        <h3>Victoria</h3>
                         <em>Developer</em>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }
}

export default Contribuidores;