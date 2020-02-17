import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import NormalCounter from './components/NormalCounter.js'
import CounterContainer from './containers/CounterContainer'
import CounterContainerHook from './containers/CounterContainerHook'

function App() {

  const myStyle = {
    fontWeight: 'bold',
    color: '#b82514',
    textDecoration: 'none'
  };

  return (
    <div>
      <NavLink activeStyle={myStyle} to='/normal_counter'>[NormalCounter]</NavLink>
      <NavLink activeStyle={myStyle} to='/counter_container'>[CounterContainer]</NavLink>
      <NavLink activeStyle={myStyle} to='/counter_container_hook'>[CounterContainerHook]</NavLink>

      <Switch>
        <Route path='/normal_counter' component={NormalCounter}/>
        <Route path='/counter_container' component={CounterContainer}/>
        <Route path='/counter_container_hook' component={CounterContainerHook}/>
      </Switch>
    </div>
  );
}

export default App;
