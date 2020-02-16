import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import MyChildren from './components/MyChildren'
import MyProps from './components/MyProps'
import MyPropTypes from './components/MyPropTypes'
import MyState from './components/MyState'
import MyRef from './components/MyRef'


class App extends React.Component{

  get myStyle(){
    return{
      fontWeight:'bold',
      color:'#b82514',
      textDecoration:'none'
    };
  }

  render(){
    return(
      <div>
        <h1>class-component</h1>

        <NavLink activeStyle={this.myStyle} to="/myprops">[MyProps]</NavLink>
        <NavLink activeStyle={this.myStyle} to="/mypropTypes">[MyPropTypes]</NavLink>
        <NavLink activeStyle={this.myStyle} to="/mychildren">[mychildren]</NavLink>
        <NavLink activeStyle={this.myStyle} to="/MyState">[MyState]</NavLink>
        <NavLink activeStyle={this.myStyle} to="/myref">[MyRef]</NavLink>

        <Switch>
          <Route path="/myprops" component={MyProps}/>
          <Route path="/mypropTypes" component={MyPropTypes}/>
          <Route path="/mychildren" component={MyChildren}/>
          <Route path="/MyState" component={MyState}/>
          <Route path="/myref" component={MyRef}/>
        </Switch>
      </div>
    )
  }
}

export default App;
