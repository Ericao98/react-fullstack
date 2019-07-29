import axios from 'axios';

const USER_LIST = 'USER_LIST', ERROR = 'ERROR';

const initState = {
    userList: [],
    msg: ''
}

export function chatUser(state = initState, action) {
    switch (action.type) {
        case USER_LIST:
            return { ...state, userList: action.data, msg: '' };
        case ERROR:
            return { ...state, msg: action.msg };
        default:
            return state;
    }
}

function updateList(data) {
    return { type: USER_LIST, data };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

export function getUserList(type) {
    return dispatch => {
        axios.get(`/user/list?type=${type}`)
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(updateList(res.data.data));
                } else {
                    dispatch(errMsg(res.data.msg));
                }
            }).catch(err => {
                dispatch(errMsg(err))
            })
    }
}
