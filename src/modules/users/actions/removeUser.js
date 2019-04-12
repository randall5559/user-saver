import { createAction } from 'redux-actions';

import actionTypes from '../constants';
import apis from '../../../apis/users';
import { showMessage } from '../../message/actions/showHideMessageBox';

// Actions
const removeUserSuccess = createAction(actionTypes.REMOVE_USER_SUCCESS);
const removeUserFailure = createAction(actionTypes.REMOVE_USER_FAILURE);

/**
 * Retrieve all saved Github users from Firebase
 *
 * @param {*} dispatch
 */
const removeUser = (key) => {
  const thunk = dispatch => {
    return apis.removeUser(key)
      .then(() => {
        dispatch(removeUserSuccess({ key }));
      })
      .catch(error => {
        dispatch(removeUserFailure(error));
        dispatch(showMessage('Error: couldn\'t remove selected user!'));
        return error;
      });
  }

  thunk.type = actionTypes.REMOVE_USER;

  return thunk;
}

export default removeUser;
