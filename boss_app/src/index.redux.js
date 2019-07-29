import { combineReducers } from 'redux';
import { user } from './redux/user.index';
import { chatUser } from './redux/chatUser.redux';

export const reducers = combineReducers({
    user,
    chatUser
});
