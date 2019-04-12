import { combineReducers } from 'redux';
import users from '../users/reducers';
import message from '../message/reducers';

const rootReducer = combineReducers({
    users,
    message
});

export default rootReducer
