import React from 'react';
import Home from './components/Home.js'
import About from './components/About.js'

import { Route,Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>hello react</h1>

      <Link to="/">[Home]</Link>
      <Link to="/about">[About]</Link>
      <hr/>
      
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>

    </div>
  );
}

export default App;
