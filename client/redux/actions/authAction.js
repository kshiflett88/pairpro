export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const registerUser = (authData) => {
  const {fullName, email, password} = authData; 

  return async dispatch => {

    //logic to make post request to REGISTER the user

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: 1
    })
  }
}

export const loginUser = (authData) => {
  const {email, password} = authData; 

  return async dispatch => {

    //logic to make post request to LOGIN the user

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: 1
    })
  }
}