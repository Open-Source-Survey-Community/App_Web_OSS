import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import imageshot from '../../../assets/img/home/mockup-android-1.png';

class caracteristicaHome extends React.Component{
    render() {
      return (
        <div>
        <section  className="aside_section light">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 wow animated fadeInLeft" data-wow-delay="0.2s">

                        <img src={imageshot} alt="" className="img-responsive" />

                    </div>
                    <div className="col-md-6">
                        <div className="aside_features">
                            <h1>{i18n.t("Home.Caracteristica.Title")}</h1>
                            <hr className="separator" />
                            <div className="features-box-1">
                                <i className="pe-7s-add-user"></i>
                                <div className="features-box-1-text">
                                    <h3>{i18n.t("Home.Caracteristica.FirstCaracteristic")}</h3>
                                    <p>
                                    {i18n.t("Home.Caracteristica.FirstContent")}
                                    </p>
                                </div>
                            </div>
                            <div className="features-box-1">
                                <i className="pe-7s-browser"></i>
                                <div className="features-box-1-text">
                                    <h3>{i18n.t("Home.Caracteristica.SecondCaracteristic")}</h3>
                                    <p>
                                    {i18n.t("Home.Caracteristica.SecondContent")}
                                    </p>
                                </div>
                            </div>
                            <div className="features-box-1">
                                <i className="pe-7s-phone"></i>
                                <div className="features-box-1-text">
                                    <h3>{i18n.t("Home.Caracteristica.ThirdCaracteristic")}</h3>
                                    <p>
                                    {i18n.t("Home.Caracteristica.ThirdContent")}
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

export default translate("translations")(caracteristicaHome);