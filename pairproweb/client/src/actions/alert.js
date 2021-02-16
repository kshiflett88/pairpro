import {v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Can add the dispatch because of our thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) =>  dispatch => {
  const id = uuidv4() // Gives random long string
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
}