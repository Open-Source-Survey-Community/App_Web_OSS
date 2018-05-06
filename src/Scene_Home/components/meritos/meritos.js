import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';

class Merito extends React.Component{
    render() {
      return (
        <div>
        <section className="aside_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="aside_features wow animated fadeInLeft">
                            <h1>{i18n.t("Home.Merito.Title")}</h1>
                            <hr className="separator" />
                            <p>
                            {i18n.t("Home.Merito.Content")}
                            </p>                         
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="http://player.vimeo.com/video/57175742" title='video promocional curso'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }
}

export default translate("translations")(Merito);