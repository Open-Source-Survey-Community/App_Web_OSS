import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import './seccion.css';
import image1 from '../../../assets/img/home/1.jpg';
import image2 from '../../../assets/img/home/2.jpg';
import image3 from '../../../assets/img/home/3.jpg';

class SeccionPrincipal extends React.Component{
    constructor(props){
        super(props);
        this.Language = this.Language.bind(this);
    }
    Language(event){
        i18n.changeLanguage(event.target.value);
    }
    render() {
        const styleBtnLanguage= {
            position: "relative",
            left: "40px"
        }
      return (
        <section className="intro-section" id="welcome">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-md-offset-1 col-sm-12">
                        <div className="intro_text">
                            <h1>{i18n.t("Home.SeccionPrincipal.welcome")}</h1>
                            <br />
                            <p>{i18n.t("Home.SeccionPrincipal.shortDescription")}</p>
                            <div className="buttons scroll-to">
                                <a href="#features" className="btn  btn-light-dark ">{i18n.t("Home.SeccionPrincipal.btnRespondSurvey")}<i className="fa fa-angle-down"></i></a>
                                <a href="#download" className="btn  btn-skin ">{i18n.t("Home.SeccionPrincipal.btnJoinOurApp")}<i className="fa fa-cloud-download"></i></a>

                            </div>
                            <div className="buttons scroll-to">
                                <button className="btn btn-default language-en" value="en" onClick={this.Language}>ENGLISH</button>
                                <button className="btn btn-default language-es" value="es" onClick={this.Language} style={styleBtnLanguage}>SPANISH</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
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
                </div>
            </div>
        </section>
      );
    }
}

export default translate('translations')(SeccionPrincipal);