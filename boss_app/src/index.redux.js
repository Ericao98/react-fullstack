// action definition
const ADD = 'add', DEL = 'del';

export function actADD(name) {
    return {type: ADD, name};
}

export function actADDAsync(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch(actADD(name))
        }, 2000);
    }
}

// export function actDEL() {
//     return {type: DEL};
// }

// reducer
export function reducer(state =[], action) {
    switch(action.type) {
        case 'add':
            return [...state, action.name]
        // case 'del':
        //     return state - 1;
        default:
            return [];
    }
}
