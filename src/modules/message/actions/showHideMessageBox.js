import { createAction } from 'redux-actions';

import actionTypes from '../constants';

// Actions
export const showMessage = createAction(actionTypes.SHOW_MESSAGE);
export const hideMessage = createAction(actionTypes.HIDE_MESSAGE);
