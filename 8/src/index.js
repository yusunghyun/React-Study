import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'
import {composeWithDevTools} from 'redux-devtools-extension'

import {createStore,applyMiddleware} from 'redux'
import Logger from './middlewares/Logger'

//모두를 스토어에 넣는거
import {Provider} from 'react-redux'

//모듈에 직접 모든 액션,액션생성함수,초기상태값 묶음으로 가져온다
import rootReducer from './modules'

//크롬개발자도구와 연계
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Logger)))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
