import React from 'react';
class RedesSociales extends React.Component{
    render() {
        const style ={
            position: 'relative',
            left: '289px'
        }
      return (
        <div style={style}>
          <section  >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-8 text-center">
                        <div className="section_heading">
                            <h3 className="wow animated fadeInDown" data-wow-delay="0.1s">Download the App Now!</h3>
                            <hr className="separator" />
                            <p>Available at App Store and Play Store</p>
                        </div>
                        <div className="buttons wow animated bounceIn" data-wow-delay="0.2s">
                            <a ><img src="images/app-store.png" alt="" /></a>
                            <a ><img src="images/play-store.png" alt="" /></a>
                        </div>
                        <div className='space-30'></div>
                        <img src="images/arrow-up.png" alt="" />
                        <span>Just $1.99 for a limited time!</span>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }

}
export default RedesSociales;
