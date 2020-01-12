import React from 'react';
import Home from './components/Home.js'
import About from './components/About.js'
import DepartmentGet from './components/DepartmentGet.js'
import DepartmentPath from './components/DepartmentPath.js'
import Error404 from './components/Error404.js'
import Main from './components/Main.js'

import { Route,Link,Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>hello react</h1>

      <Link to="/">[Home]</Link>
      <Link to="/about">[About(1)]</Link>
      <Link to="/introduce">[About(2)]</Link>
      <Link to="/department_get?deptno=101&msg=hello">[컴공]</Link>
      <Link to="/department_get?deptno=102&msg=world">[멀미공]</Link>
      <Link to="/department_path/201/hello">[전기공]</Link>
      <Link to="/department_path/202/world">[기계공]</Link>
      <Link to="/main">[Main]</Link>

      <hr/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/main" component={Main}/>
        <Route path={["/about","/introduce"]} component={About}/>
        <Route path="/department_get" component={DepartmentGet}/>
        <Route path="/department_path/:deptno/:msg" component={DepartmentPath}/>
        {/* 위에꺼 걸르고 나면 else마냥 아래꺼 됨 */}
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
