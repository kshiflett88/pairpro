import { REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from '../actions/authAction';

const initialState = {
  user: {},
  error: {}
}

export default function(state = initialState, action) {

  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
  }
  return state
}