import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import image1 from '../../../assets/img/home/1.jpg';
import image2 from '../../../assets/img/home/2.jpg';
import image3 from '../../../assets/img/home/3.jpg';

class SeccionSecundaria extends React.Component{
    render() {
      return (
        <div>
          <section  className="features-section">
            <div className="container">
                <div className="section_heading">
                    <h3>{i18n.t('Home.SeccionSecundaria.title')}</h3>
                    <hr className="separator" />
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>{i18n.t('Home.SeccionSecundaria.FirstCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.FirstContent')}</p>
                            </div>                           
                        </div>
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="text">
                                <h3>{i18n.t('Home.SeccionSecundaria.SecondCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.SecondContent')}</p>
                            </div>                           
                        </div>
                        <div className="feature-right">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>{i18n.t('Home.SeccionSecundaria.ThirdCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.ThirdContent')}</p>
                            </div>                           
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-md-4">
                        <div className="iphone_holder">
                            <div className="iphone_inner flexslider">
                                <div className="iphone_slider">
                                    <ul className="slides">
                                        <li><img src={image1} alt="" className="img-responsive" /></li>
                                        <li><img src={image2} alt="" className="img-responsive" /></li>
                                        <li><img src={image3} alt="" className="img-responsive" /></li>
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
                                <h3>{i18n.t('Home.SeccionSecundaria.FourCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.FourContent')}</p>
                            </div>                           
                        </div>
                        <div className="feature-left">
                            <div className="icon">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="text">
                                <h3>{i18n.t('Home.SeccionSecundaria.FiveCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.FiveContent')}</p>
                            </div>                           
                        </div>
                        <div className="feature-left">
                            <div className="icon">
                                <i className="fa fa-mobile-phone"></i>
                            </div>
                            <div className="text">
                                <h3>{i18n.t('Home.SeccionSecundaria.SixCaracteristic')}</h3>
                                <p>{i18n.t('Home.SeccionSecundaria.SixContent')}</p>
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

export default translate('translations')(SeccionSecundaria);