import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import Login from './component/login/login';
import Register from './component/register/register';
import AuthRouter from './component/authroute/authroute';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function Boss() {
    return <h1>BOSS页面</h1>;
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRouter></AuthRouter>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
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
