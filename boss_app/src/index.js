import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1. 新建store
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer, actADDAsync, actADD } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

// reducer函数
// 根据老的state和action生成新的state
// function counter(state=0, action) {
//     switch(action.type) {
//         case 'add':
//             return state + 1;
//         case 'delete':
//             return state - 1;
//         default:
//             return 10;
//     }
// }

// const store = createStore(counter);
// const init = store.getState();
// console.log(init);

// function listener() {
//     const state = store.getState();
//     console.log(`current state: ${state}`);
// }


// store.dispatch({type: 'add'});
// store.subscribe(listener);
// store.dispatch({type: 'delete'});
// store.dispatch({type: 'delete'});

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxDevtools
));
// console.log(store.getState());

function Two() {
    return <h1>页面二</h1>
}
function Three() {
    return <h1>页面三</h1>
}

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>404 Not Found</h1>;
    }
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/two'>页面二</Link>
                    </li>
                    <li>
                        <Link to='/three'>页面三</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/two' component={Two}></Route>
                    <Route path='/three' component={Three}></Route>
                    <Route path='/:location' component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
        {/* <App /> */}
    </Provider>),
    document.getElementById('root')
);


// render();
// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
