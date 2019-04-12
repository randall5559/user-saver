import initialState from '../../store/initialState.json';
import actionTypes from '../constants';

const users = (state = initialState.users, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_USERS_FAILURE:
        case actionTypes.REMOVE_USER_FAILURE:
            return state;

        case actionTypes.FETCH_USERS_SUCCESS:
            const usersState = Object.keys(payload).map((key, id) => ({ key, id, ...payload[key] }));
            return usersState;

        case actionTypes.FETCH_USER_INFO:
            const {
                html_url: url,
                login: username,
                name,
                public_repos: publicRepos,
                public_gists: publicGists,
                followers, following,
                created_at: createdAt
            } = payload;

            const userInfoState = state.slice(0);

            userInfoState.push({
                url,
                username,
                name,
                publicRepos,
                publicGists,
                followers,
                following,
                createdAt: new Date(createdAt).toDateString(),
                id: (state.length + 1) });

            return userInfoState;

        case actionTypes.REMOVE_USER_SUCCESS:
            const { key } = payload;
            const removeState = state.slice(0);
            return removeState.filter(obj => obj.key !== key);

        default:
            return state;
    }
}

export default users
