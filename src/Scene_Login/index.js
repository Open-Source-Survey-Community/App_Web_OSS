import React from 'react';
import {connect} from 'react-redux';
import ComponentLogin from './components/logIn/index';
import SweetAlert from 'react-bootstrap-sweetalert';
//import {Redirect} from 'react-router-dom';
import {GITHUB_LOGIN,GOOGLE_LOGIN,TWITTER_LOGIN,GET_USER, RESET_ERROR, AUTHENTICATING} from '../actions/authentication/index';
import './index.css';
class Login extends React.Component {
    constructor(props){
      super(props);
      this.loginWithGoogle = this.loginWithGoogle.bind(this);
      this.loginWithTwitter = this.loginWithTwitter.bind(this);
      this.loginWithGithub = this.loginWithGithub.bind(this);
      this.showMessageError = this.showMessageError.bind(this);
      this.hideMessage = this.hideMessage.bind(this);
      this.state = {
        alertMessage: null
      }
    }

    componentWillReceiveProps(newProps, props) {
        if (newProps.myInformation.isAuthenticated){
          if (newProps.myInformation.email){

          }else{
              this.showMessageError('No se encontro email en la cuenta asociada','Registrese en otra cuenta que contenga un correo asociado')
          }
        }
        if(newProps.myInformation.description_error.status !== 0){
              this.showMessageError('Se encontro un error #'+newProps.myInformation.description_error.status,'Existen problemas en las cuentas sociales asociadas en la plataforma intentelo en unos minutos')
              this.props.AUTHENTICATING(false);
              this.props.RESET_ERROR();
        }
    }

    showMessageError(title,content){
        const showMessage = ()=>(
          <SweetAlert 
                    danger
                    confirmBtnText="OK"
                    confirmBtnBsStyle="danger"
                    title={title}
                    onConfirm={this.hideMessage}

          >
            {content}
          </SweetAlert>
        );
        this.setState({
          alertMessage: showMessage()
        });
    }

    hideMessage (){
      this.setState({
        alertMessage: null
      });
    }

    loginWithGoogle(){
      this.props.GOOGLE_LOGIN()
    }
    loginWithTwitter(){
      this.props.TWITTER_LOGIN()

    }
    loginWithGithub(){
      this.props.GITHUB_LOGIN()

    }
    render() {
      return (
        <div>
          <section id="wrapper" className="login-register login-sidebar fondo">
            <ComponentLogin logGoogle = {this.loginWithGoogle} logTwitter={this.loginWithTwitter} logGithub={this.loginWithGithub} socialMedia = {this.props.myInformation.socialMedia} loading = {this.props.myInformation.isAuthenticating} />
            {this.state.alertMessage}
          </section>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  myInformation: state.authentication
})

const mapDispatchToProps = dispatch => {
  return {
     GITHUB_LOGIN: () => dispatch(GITHUB_LOGIN()),
     GOOGLE_LOGIN: () => dispatch(GOOGLE_LOGIN()),
     TWITTER_LOGIN: () => dispatch(TWITTER_LOGIN()),
     RESET_ERROR: () => dispatch(RESET_ERROR()),
     GET_USER: () => dispatch(GET_USER()),
     AUTHENTICATING: () => dispatch(AUTHENTICATING())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);