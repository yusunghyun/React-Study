import React from 'react';
import { Route,Link,Switch } from "react-router-dom"

import Sub1 from './Sub1';
import Sub2 from './Sub2';

const Main = () => {
  return (
    <div>
      <h2>Main</h2>

      <ul>
        <li><Link to="/main/sub1">Goto Sub1</Link></li>
        <li><Link to="/main/sub2">Goto Sub2</Link></li>
      </ul>

      <Switch>
        <Route path={["/main","/main/sub1"]} component={Sub1} />
        <Route path="/main/sub2" component={Sub2} />
      </Switch>
    </div>
  );
};

export default Main;