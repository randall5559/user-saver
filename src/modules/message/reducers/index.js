import initialState from '../../store/initialState.json';
import actionTypes from '../constants';

const users = (state = initialState.message, { type, payload }) => {
    switch (type) {
        case actionTypes.SHOW_MESSAGE:
            return {
                display: true,
                message: payload,
            };
        case actionTypes.HIDE_MESSAGE:
            return { ...state, display: false };
        default:
            return state;
    }
}

export default users
