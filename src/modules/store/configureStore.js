import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import defaultInitialState from './initialState';

const store = () => createStore(
    rootReducer,
    defaultInitialState,
    applyMiddleware(thunk)
);

export default store;
