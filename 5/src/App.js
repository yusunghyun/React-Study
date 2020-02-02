import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import './assets/css/style.css';
import MyState from './components/MyState'
import MyEffect from './components/MyEffect'
import StateEffectEx from './components/StateEffectEx'
import MyReducer1 from './components/MyReducer1'
import dateRange2 from './components/DateRange2'
import MyRef from './components/MyRef'

function App() {
  return (
    <div className="App">
      <h1>훅훅훅</h1>
      <NavLink to="/mystate" className="normalLink" activeClassName="activeLink">[MyState]</NavLink>
      <NavLink to="/myeffect" className="normalLink" activeClassName="activeLink">[MyEffect]</NavLink>
      <NavLink to="/stateeffectex" className="normalLink" activeClassName="activeLink">[StateEffectEx]</NavLink>
      <NavLink to="/myreducer1" className="normalLink" activeClassName="activeLink">[MyReducer1]</NavLink>
      <NavLink to="/dateRange2" className="normalLink" activeClassName="activeLink">[dateRange2]</NavLink>
      <NavLink to="/MyRef" className="normalLink" activeClassName="activeLink">[MyRef]</NavLink>

      <Switch>
        <Route path="/mystate" component={MyState}/>
        <Route path="/myeffect" component={MyEffect}/>
        <Route path="/stateeffectex" component={StateEffectEx}/>
        <Route path="/myreducer1" component={MyReducer1}/>
        <Route path="/dateRange2" component={dateRange2}/>
        <Route path="/MyRef" component={MyRef}/>
      </Switch>
    </div>
  );
}

export default App;
