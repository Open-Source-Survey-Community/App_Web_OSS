import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {dynamicContentDashboard,dynamicDashBandejaEntrada, dynamicDashColaboradores, dynamicDashConfiguracionCuenta} from '../content/index';
import {dynamicDashEncuesta, dynamicDashNuevaEncuesta, dynamicDashNuevaPregunta, dynamicDashPerfil} from '../content/index';
import {dynamicDashPregunta, dynamicDashPortalEncuestas, dynamicDashPortalPreguntas, dynamicDashResultadosEncuestas} from '../content/index';


const subApp = ()=>(
<Switch>
      <Route path='/Dashboard/:correo/:displayName' component={dynamicContentDashboard}/>
      <Route path='/verPerfilGeneral/:idUser' component={dynamicDashPerfil} />
      <Route path='/EditarPerfil/:idUser' component={dynamicDashPerfil} />
      <Route path='/verPerfilAcademico/:idUser' component={dynamicDashPerfil} />
      <Route path='/verBandejaEntrada/:idUser' component={dynamicDashBandejaEntrada} />
      <Route path='/verConfiguracionCuenta' component={dynamicDashConfiguracionCuenta} />
      <Route path='/irPortalPreguntas' component={dynamicDashPortalPreguntas}/>
      <Route path='/irPortalEncuestas' component={dynamicDashPortalEncuestas}/>
      <Route path='/crearNuevaPregunta' component={dynamicDashNuevaPregunta}/>
      <Route path='/crearNuevaEncuesta' component={dynamicDashNuevaEncuesta}/>
      <Route path='/cargarComentariosMiEncuesta/:idUser/:idEncuesta' component={dynamicDashPortalEncuestas}/>
      <Route path='/cargarComentariosMiPregunta/:idUser/:idPregunta' component={dynamicDashPortalPreguntas}/>
      <Route path='/cargarComentariosMiDiscusionPregunta/:idUser/:idDiscusionPregunta' component={dynamicDashPregunta}/>
      <Route path='/cargarComentariosMiDiscusionEncuesta/:idUser/:idDiscusionEncuesta' component={dynamicDashEncuesta}/>
      <Route path='/cargarColaboradoresMiEncuesta/:idUser/:idEncuesta/:idColaborador' component={dynamicDashColaboradores}/>
      <Route path='/administrarMisPreguntas/:idUser' component={dynamicDashPregunta}/>
      <Route path='/verMiPregunta/:idUser/:idPregunta' component={dynamicDashPregunta}/>
      <Route path='/editarMiPregunta/:idUser/:idPregunta' component={dynamicDashNuevaPregunta}/>
      <Route path='/administrarCorreccionesHechasPreguntas/:idUser' component={dynamicDashPregunta}/>
      <Route path='/verMiCorreccionDePregunta/:idUser/:idCorreccionPregunta' component={dynamicDashPregunta}/>
      <Route path='/editarCorreccionDePregunta/:idUser/:idCorreccionPregunta' component={dynamicDashPregunta}/>
      <Route path='/administrarMisEncuestas/:idUser' component={dynamicDashEncuesta}/>
      <Route path='/verMiEncuesta/:idUser/:idEncuesta' component={dynamicDashEncuesta}/>
      <Route path='/editarMiEncuesta/:idUser/:idEncuesta' component={dynamicDashEncuesta}/>
      <Route path='/administrarCorreccionesHechasEncuestas/:idUser' component={dynamicDashEncuesta}/>
      <Route path='/verMiCorreccionDeEncuesta/:idUser/:idCorreccionEncuesta' component={dynamicDashEncuesta}/>
      <Route path='/editarCorreccionDeEncuesta/:idUser/:idCorreccionEncuesta' component={dynamicDashEncuesta}/>
      <Route path='/anadirColaboradorMyEncuesta/:idUser/:idEncuesta' component={dynamicDashColaboradores}/>
      <Route path='/administrarResultadosEncuestas/:idUser/:idEncuesta' component={dynamicDashResultadosEncuestas}/>
    </Switch>
)

export default subApp;