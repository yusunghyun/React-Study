import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import './assets/css/style.css';
import MyState from './components/MyState'
import MyEffect from './components/MyEffect'
import StateEffectEx from './components/StateEffectEx'

function App() {
  return (
    <div className="App">
      <h1>훅훅훅</h1>
      <NavLink to="/mystate" className="normalLink" activeClassName="activeLink">[MyState]</NavLink>
      <NavLink to="/myeffect" className="normalLink" activeClassName="activeLink">[MyEffect]</NavLink>
      <NavLink to="/stateeffectex" className="normalLink" activeClassName="activeLink">[StateEffectEx]</NavLink>

      <Switch>
        <Route path="/mystate" component={MyState}/>
        <Route path="/myeffect" component={MyEffect}/>
        <Route path="/stateeffectex" component={StateEffectEx}/>
      </Switch>
    </div>
  );
}

export default App;
