import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Scene_Home/index';
import Results from './Scene_Results/index';
import Login from './Scene_Login/index';
import Loadable from 'react-loadable';
import LoadingComponent from './animation/loading/index'
import './App.css';

function LoadingRoutesApp(props){
    if (props.error){
      console.log(props.error);
      return <div>Error en la red para consultar el recurso deseado</div>;
    }else if(props.pastDelay){
      return <LoadingComponent description="El recurso esta tomando demasiado tiempo en cargar, debido a la conexion de internet"/>
    }else{
      return <LoadingComponent description="Cargando la informacion del usuario" />

    }
}


const dynamicDashBoard = Loadable({
    loader: () => import('./Scene_Dashboard/index'),
    loading: LoadingRoutesApp,
    pastDelay: 2000
});


const App = ()=>(
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/Results' component={Results}/>
      <Route path='/Dashboard/:correo/:displayName' component={dynamicDashBoard}/>
    </Switch>
  </main>
)

export default App;
