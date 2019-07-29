import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'antd-mobile/dist/antd-mobile.css'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRouter from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import DashBoard from './container/dashboard/dashboard';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

// function Boss() {
//     return <h1>BOSS页面</h1>;
// }

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRouter />
                <Switch>
                <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register} ></Route>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route component={DashBoard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);


// render();
// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();