import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class MenuComponent extends Component {
    render() {
        return (
            <div>
                <div className="dropdown-menu animated bounceInDown mostrarMenuAccionesApp">
                    <ul className="mega-dropdown-menu row">
                        <li className="col-lg-3 m-b-30">
                            <h4 className="m-b-20">Foros</h4>
                            <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to='/irPortalPreguntas'>
                                                Preguntas
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to='/irPortalEncuestas'>
                                                Encuestas
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-3 m-b-30">
                            <h4 className="m-b-20">Actividades del Usuario</h4>
                            <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/Dashboard/${this.props.correo}/${this.props.displayName}`}>
                                               Mi Dashboard
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/administrarMisPreguntas/${this.props.idUser}`}>
                                                Mis Preguntas
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/administrarMisEncuestas/${this.props.idUser}`}>
                                                Mis Encuestas
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/administrarCorreccionesHechasPreguntas/${this.props.idUser}`}>
                                                Bandeja de Discusiones de Preguntas
                                            </Link>
                                        </h5>
                                    </div>

                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/administrarCorreccionesHechasEncuestas/${this.props.idUser}`}>
                                                Bandeja de Discusiones de Encuestas
                                            </Link>
                                        </h5>
                                    </div>

                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to={`/cargarColaboradoresMiEncuesta/${this.props.idUser}/${this.props.idEncuesta}/${this.props.idColaborador}`}>
                                                Mis colaboradores
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-lg-3 m-b-30">
                            <h4 className="m-b-20">Acciones del Usuario</h4>
                            <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h5 className="mb-0">
                                            <Link to='/crearNuevaPregunta'>
                                                Nueva Pregunta
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h5 className="mb-0">
                                            <Link to='/crearNuevaEncuesta'>
                                                Nueva Encuesta
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h5 className="mb-0">
                                            <Link to={`/administrarResultadosEncuestas/${this.props.idUser}/${this.props.idEncuesta}`}>
                                            Ver mis Resultados de Encuesta
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="col-lg-3  m-b-30">
                            <h4 className="m-b-20">CONTACT US</h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-info">Submit</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuComponent
