import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import MyProps from './components/MyProps'
import MyPropTypes from './components/MyPropTypes'
import MyChildren from './components/MyChildren'

function App() {

  const myStyle = {
    fontWeight : 'bold',
    color: '#b82514',
    textDecoration:'none',
  }

  return (
    <div className="App">
      <h1>(클래스+함수)형</h1>
      <NavLink activeStyle={myStyle} to="/myprops">[MyProps]</NavLink>
      <NavLink activeStyle={myStyle} to="/mypropTypes">[MyPropTypes]</NavLink>
      <NavLink activeStyle={myStyle} to="/mychildren">[mychildren]</NavLink>

      <Switch>
        <Route path="/myprops" component={MyProps}/>
        <Route path="/mypropTypes" component={MyPropTypes}/>
        <Route path="/mychildren" component={MyChildren}/>
      </Switch>
    </div>
  );
}

export default App;
