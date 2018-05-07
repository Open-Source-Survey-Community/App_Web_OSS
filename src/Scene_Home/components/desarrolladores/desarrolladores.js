import React from 'react';
import {translate} from 'react-i18next';
import i18n from '../../../i18n';
import team1 from '../../../assets/img/home/team-2.jpg';
import team2 from '../../../assets/img/home/team-2.jpg';
class Contribuidores extends React.Component{
    render() {
      return (
        <div>
           <section id="download" className="download-section">
            <div className="container">
                <div className="section_heading">
                    <h3>{i18n.t("Home.Desarrolladores.Title")}</h3>
                    <hr className="separator" />
                    <p>{i18n.t("Home.Desarrolladores.shortDescription")}</p>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className="person-col">
                            <img src={team1} alt="" className="img-responsive" />
                        </div>
                        <h3>Kevin Ortiz Merchan</h3>
                        <em>{i18n.t("Home.Desarrolladores.FirstUserDegree")}</em>
                        <p>{i18n.t("Home.Desarrolladores.FirstUser")}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="person-col">
                            <img src={team2} alt="" className="img-responsive" />
                        </div>
                        <h3>Rafael Bonilla</h3>
                         <em>{i18n.t("Home.Desarrolladores.SecondUserDegree")}</em>
                         <p>{i18n.t("Home.Desarrolladores.SecondUser")}</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
    }
}

export default translate("translations")(Contribuidores);