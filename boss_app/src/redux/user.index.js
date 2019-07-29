import axios from "axios";
import { getRouter } from '../utils';

// const REGISTER_SUCCESS = 'REGISTER_SUCCESS',
// LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR = 'ERROR',
    LOAD_DATA = 'LOAD_DATA',
    UPDATE_USER = 'UPDATE_USER';

const initState = {
    router: '',
    isAuth: false,
    msg: '',
    name: '',
    // pwd: '',
    confirmpwd: '',
    type: 'genius' // 或者boss
}

// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, /*isAuth: true,*/ msg: '', router: getRouter(action.data), ...action.data };
        // case REGISTER_SUCCESS:
        //     return { ...state, isAuth: true, msg: '', router: getRouter(action.data), ...action.data };
        // case LOGIN_SUCCESS:
        //     return { ...state, isAuth: true, msg: '', router: getRouter(action.data), ...action.data };
        case LOAD_DATA:
            return { ...state, msg: '', ...action.data };
        case ERROR:
            return { ...state, isAuth: false, msg: action.err };
        default:
            return state;
    }
};

// action creator
export function errMsg(err) {
    return { err, type: ERROR };
}

export function log(data) {
    return {  type: LOAD_DATA, data, };
}

export function loginData() {
    return dispatch => {
        // console.log(dispatch)
        axios.get('/user/info')
            .then(res => {
                dispatch(log(res.data.data));
            }).catch(err => {
                console.log(err)
            })
    }
}

export function update(data) {
    
    return { data, type: UPDATE_USER };
}

// export function regData(data) {
//     return { data, type: REGISTER_SUCCESS }
// }

// export function logData(data) {
//     return { data, type: LOGIN_SUCCESS }
// }

export function updateData(userinfo) {
    return dispatch => {
        axios.post('/user/update', userinfo)
            .then(res => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        dispatch(update(res.data.data));
                    } else {
                        dispatch(errMsg(res.data.msg));
                    }
                }
            }).catch(err => {
                console.log(err);
            })
    }
}

export function login({ name, pwd }) {
    return dispatch => {

        axios.post('/user/login', { name, pwd })
            .then(res => {
                // console.log(res)
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        dispatch(update(res.data.data));
                        // dispatch(logData(res.data.data));
                    } else {
                        dispatch(errMsg(res.data.msg));
                    }
                }
            }).catch(err => {
                console.log(err)
            })
    }
}

export function register({ name, pwd, confirmpwd, type }) {
    if (!name || !pwd || !type) {
        return errMsg('所有项均为必填项');
    }
    if (pwd !== confirmpwd) {
        return errMsg('用户名和密码不符');
    }
    // return errMsg('目前没有问题');
    return dispatch => {
        axios.post('/user/register', { name, pwd, type })
            .then(res => {
                if (res.status === 200) {
                    if (res.data.code === 0)
                        dispatch(update({ name, pwd, type }));
                    // dispatch(regData({ name, pwd, type }));
                    else
                        dispatch(errMsg(res.data.msg));
                }
            }).catch(err => {
                dispatch(errMsg(err));
            })
    }
}