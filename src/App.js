import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DashBoard from './Scene_Dashboard/index';
import Home from './Scene_Home/index';
import Results from './Scene_Results/index';
import Login from './Scene_Login/index';
import './App.css';

const App = ()=>(
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/Results' component={Results}/>
      <Route path='/Dashboard' component={DashBoard}/>
    </Switch>
  </main>
)

export default App;
