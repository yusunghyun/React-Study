import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import NewsList from './components/NewsList'
import Category from './components/Category'
import NewsPage from './pages/NewsPage'


function App() {
  return (
    <div className="App">
      <h2>뉴스</h2>

      

      <Switch>
        {/* :변수이름? 이 물음표는 해당 변수가 선택적이라는 의미 */}
        <Route path='/:categorey?' component={NewsPage}/>
      </Switch>
    </div>
  );
}

export default App;
