import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';

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
                            <h3 className="wow animated fadeInDown" data-wow-delay="0.1s">{i18n.t("Home.RedesSociales.Title")}</h3>
                            <hr className="separator" />
                            <p>{i18n.t("Home.RedesSociales.shortDescription")}</p>
                        </div>
                        <div className="buttons wow animated bounceIn" data-wow-delay="0.2s">
                            <a ><img src="images/app-store.png" alt="" /></a>
                            <a ><img src="images/play-store.png" alt="" /></a>
                        </div>
                        <div className='space-30'></div>
                        <img src="images/arrow-up.png" alt="" />
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
