import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import arrow_up from '../../../assets/img/home/arrow-up.png';
import githubIcon from '../../../assets/img/home/github.png';
import googleIcon from '../../../assets/img/home/icon_google.png';
import twitterIcon from '../../../assets/img/home/twitter-squared.png';
import {Link} from 'react-router-dom';
import './redesSociales.css';
class RedesSociales extends React.Component{
    constructor(props){
        super(props);
        this.openNewTabLogin = this.openNewTabLogin.bind(this);
    }
    openNewTabLogin(e){
        e.preventDefault();
        let win = window.open("/login","_blank");
        win.focus();
    }
    render() {
        const style ={
            position: 'relative',
            left: '289px'
        }
      return (
        <div style={style} id="download">
          <section  >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-8 text-center">
                        <div className="section_heading">
                            <h3 className="wow animated fadeInDown" data-wow-delay="0.1s">{i18n.t("Home.RedesSociales.Title")}</h3>
                            <hr className="separator" />
                            <p>{i18n.t("Home.RedesSociales.shortDescription")}</p>
                        </div>
                        <div className="buttons wow animated bounceIn" data-wow-delay="0.2s">
                            <img src={githubIcon} alt="" className="img-icon"  />
                            <img src={googleIcon} alt="" className="img-icon"  />
                            <img src={twitterIcon} alt="" className="img-icon" />
                            <Link to="/login" target="_blank" className="btn btn-lg btn-skin" onClick={this.openNewTabLogin}>Go App</Link>

                        </div>
                        <div className='space-30'></div>
                        <img src={arrow_up} alt="" />
                        <span>{i18n.t("Home.RedesSociales.description")}</span>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }

}
export default translate("translations")(RedesSociales);
