import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import imageshot1 from '../../../assets/img/home/iphone_shot_1.png';

class LeyendaApp extends React.Component {
    render() {
        return (
            <div >
                <section className="aside_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aside_features">
                                    <h1>{i18n.t("Home.Leyenda.Title")}</h1>
                                    <hr className="separator" />
                                    <p>
                                        {i18n.t("Home.Leyenda.Content")}
                                    </p>
                                
                                </div>
                            </div>
                            <div className="col-md-6 wow animated fadeInRight" data-wow-delay="0.2s">
                                <img src={imageshot1} alt="" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default translate("translations")(LeyendaApp);