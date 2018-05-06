import React from 'react';
import SeccionPrincipal from './components/seccion_principal/seccion';
import SeccionSecundaria from './components/seccion_secundaria/seccion';
import LeyendaApp from './components/leyenda_app/leyenda';
import Caracteristica from './components/caracteristicas_app/caracteristica';
import Merito from './components/meritos/meritos';
import Desarrolladores from './components/desarrolladores/desarrolladores';
import RedesSociales from './components/redesSociales/redesSociales';
import FooterHome from './components/footer/footer';
class Home extends React.Component {
    render() {
      return (
        <div>
        <SeccionPrincipal />
        <SeccionSecundaria />
        <LeyendaApp />
        <Caracteristica />
        <Merito />
        <Desarrolladores />
        <RedesSociales />
        <FooterHome />
        </div>
      );
    }
}

export default Home;