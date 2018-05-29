import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import '../../../Scene_Home/components/seccion_principal/seccion';
class ComponentLogin extends React.Component{
    constructor(props){
        super(props);
        this.Language = this.Language.bind(this);
    }
    Language(event){
        i18n.changeLanguage(event.target.value);
    }
    render() {
        const estiloTexto={
            "fontWeight":"bold"
        }
        const styleBtnLanguage= {
            position: "relative",
            left: "40px"
        }
      return (
        <div>
           <div className="content-login">
                <h1 style={estiloTexto}>{i18n.t("Login.Title")}</h1>
                <h1 style={estiloTexto}>{i18n.t("Login.Subtitle")}</h1>
                <h2 style={estiloTexto}>{i18n.t("Login.FirstContent")}</h2>
                <h2 style={estiloTexto}>{i18n.t("Login.SecondContent")}.</h2>
                <button className="btn btn-default language-en" value="en" onClick={this.Language}>ENGLISH</button>
                <button className="btn btn-default language-es" value="es" onClick={this.Language} style={styleBtnLanguage}>SPANISH</button>
           </div>
          <div className="login-box card">
              <div className="card-body">
                <div className="form-horizontal form-material" id="loginform">
                    <a  className="text-center db"><img src="../assets/images/logo-icon.png" alt="Home" /><br/><img src="../assets/images/logo-text.png" alt="Home" /></a>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social">
                                <button className="btn btn-googleplus btn-rounded btn-block btn-lg ld-ext-right running" data-toggle="tooltip" title="Login with Google" onClick={this.props.logGoogle}>
                                    <i aria-hidden="true" className="fa fa-google-plus"></i>oogle
                                    {(this.props.socialMedia === 'GOOGLE' && this.props.loading === true) && <div className="ld ld-ring ld-spin"></div>}
                                </button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social">
                                <button className="btn btn-twitter btn-rounded btn-block btn-lg ld-ext-right running" data-toggle="tooltip" title="Login with twitter" onClick={this.props.logTwitter}>
                                    <i aria-hidden="true" className="fa fa-twitter"></i>Twitter
                                    {(this.props.socialMedia === 'TWITTER' && this.props.loading === true) && <div className="ld ld-ring ld-spin"></div>}
                                </button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social">
                                <button className="btn btn-github btn-rounded btn-block btn-lg ld-ext-right running" data-toggle="tooltip" title="Login with Github" onClick={this.props.logGithub}>
                                    <i aria-hidden="true" className="fa fa-github"></i>Github
                                    {(this.props.socialMedia === 'GITHUB' && this.props.loading === true) && <div className="ld ld-ring ld-spin"></div>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
}

export default translate('translations')(ComponentLogin);