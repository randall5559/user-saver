import { createAction } from 'redux-actions';

import actionTypes from '../constants';
import apis from '../../../apis/users';
import { showMessage } from '../../message/actions/showHideMessageBox';

// Actions
const fetchUserInfoSuccess = createAction(actionTypes.FETCH_USER_INFO);
const fetchUserFailure = createAction(actionTypes.FETCH_USERS_FAILURE);

/**
 * Add a user to Firebase
 *
 * @param {*} {
 *     login: username,
 *     name,
 *     public_repos: publicRepos,
 *     public_gists: publicGists,
 *     followers,
 *     following,
 *     created_at: createdAt
 * }
 * @param {*} dispatch
 */
const addUser = ({
    html_url: url,
    login: username,
    name,
    public_repos: publicRepos,
    public_gists: publicGists,
    followers,
    following,
    created_at: createdAt
}, dispatch) => {
    apis.addUser({
        url,
        username,
        name,
        publicRepos,
        publicGists,
        followers,
        following,
        createdAt: new Date(createdAt).toDateString(),
    }, (error) => {
        if (error) {
          // The write failed...
          dispatch(showMessage('Error: User name could not be added to Github!'));
        } else {
          // Data saved successfully!
          dispatch(showMessage(`User ${username} saved successfully!`));
        }
    });
}

/**
 * Fetch a Github user's public information from [https://api.github.com/users]
 *
 * @param {*} username
 * @returns
 */
const fetchUser = (username) => {
    const thunk = dispatch => {
        return apis.fetchUser(username)
            .then(userInfo => {
                addUser(userInfo, dispatch);
                dispatch(fetchUserInfoSuccess(userInfo));
                return userInfo;
            })
            .catch(error => {
                dispatch(fetchUserFailure(error));
                dispatch(showMessage(`Couldn't find any username by the name of ${username} in Github DB.`));
                return error;
            });
    };

    thunk.type = actionTypes.FETCH_USER_INFO;

    return thunk;
}

export default fetchUser;
