import React from 'react';
import Expr1 from './components/Expr1.js'
import If1 from './components/If1.js'
import If2 from './components/If2.js'
import If3 from './components/If3.js'
import If4 from './components/If4.js'
import Loop2 from './components/Loop2.js'
import Loop1 from './components/Loop1.js'
import Loop3 from './components/Loop3.js'

import { Route,Link,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>JSX</h1>
      <Link to="/">[home]</Link>
      <Link to="/expr">[Expr]</Link>

      <Link to="/if1">[if1]</Link>
      <Link to="/if2">[if2]</Link>
      <Link to="/if3">[if3]</Link>
      <Link to="/if4">[if4]</Link>

      <Link to="/loop1">[loop1]</Link>
      <Link to="/loop2">[loop2]</Link>
      <Link to="/loop3">[loop3]</Link>
      
      <Switch>
        <Route path="/expr" component={Expr1}/>

        <Route path="/if1" component={If1}/>
        <Route path="/if2" component={If2}/>
        <Route path="/if3" component={If3}/>
        <Route path="/if4" component={If4}/>

        <Route path="/loop1" component={Loop1}/>
        <Route path="/loop2" component={Loop2}/>
        <Route path="/loop3" component={Loop3}/>
      </Switch>

    </div>
  );
}

export default App;
