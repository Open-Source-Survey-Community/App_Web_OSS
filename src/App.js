import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Scene_Home/index';
import Results from './Scene_Results/index';
import Login from './Scene_Login/index';
import asyncComponent from './Scene_Dashboard/async_index';
import './App.css';

const AsyncDashboard = asyncComponent(() => import('./Scene_Dashboard/index').then(module => module.default))
const App = ()=>(
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/Results' component={Results}/>
      <Route path='/Dashboard/:correo/:displayName' component={AsyncDashboard}/>
    </Switch>
  </main>
)

export default App;
