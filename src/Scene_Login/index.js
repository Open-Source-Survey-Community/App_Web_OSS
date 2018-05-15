import React from 'react';
import ComponentLogin from './components/logIn/index';

import './index.css';

class Login extends React.Component {
    constructor(props){
      super(props);
      this.loginWithGoogle = this.loginWithGoogle.bind(this);
      this.loginWithTwitter = this.loginWithTwitter.bind(this);
      this.loginWithGithub = this.loginWithGithub.bind(this);
    }
    loginWithGoogle(){
      console.log("autenticacion por google");
    }
    loginWithTwitter(){
      console.log("autenticacion por twitter");
    }
    loginWithGithub(){
      console.log("autenticacion por Github");
    }
    render() {
      return (
        <div>
          <section id="wrapper" className="login-register login-sidebar fondo">
            <ComponentLogin logGoogle = {this.loginWithGoogle} logTwitter={this.loginWithTwitter} logGithub={this.loginWithGithub} />
          </section>
        </div>
      );
    }
}

export default Login;