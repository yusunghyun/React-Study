import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import NewsPage from './pages/NewsPage'

const App = () => {

  const myStyle = {
    fontWeight: 'bold',
    color: '#b82514',
    textDecoration: 'none'
  };

  return (
    <div>
      <h1>Redux-News-Viewer</h1>
      <Switch>
        <Route path='/:category?' component={NewsPage}/>
      </Switch>
    </div>
  );
}

export default App;
