import { createAction } from 'redux-actions';

import actionTypes from '../constants';
import apis from '../../../apis/users';
import { showMessage } from '../../message/actions/showHideMessageBox';

// Actions
const fetchUsersSuccess = createAction(actionTypes.FETCH_USERS_SUCCESS);
const fetchUsersFailure = createAction(actionTypes.FETCH_USERS_FAILURE);

/**
 * Retrieve all saved Github users from Firebase
 *
 * @param {*} dispatch
 */
const fetchUsers = () => {
  const thunk = dispatch => {
    return apis.fetchUsers()
      .then(function(snapshot) {
        dispatch(fetchUsersSuccess(snapshot.val()));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error));
        dispatch(showMessage('No saved users found. Please add a user via the Search Users Bar.'));
        return error;
      });
  }

  thunk.type = actionTypes.FETCH_USERS;

  return thunk;
}

export default fetchUsers;
