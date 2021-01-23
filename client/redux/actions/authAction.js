export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const registerUser = (authData) => {
  const {fullName, email, password} = authData; 

  return async dispatch => {

    //logic to make post request to REGISTER the user
    const result = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        email,
        password
      })
    })

    const resultData = await result.json();

    if (resultData.success) {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: resultData
      })
    } else {
      dispatch({
        type: REGISTER_USER_FAIL,
      })
    }
    return resultData
  }
}

export const loginUser = (authData) => {
  const {email, password} = authData; 

  return async dispatch => {

    //logic to make post request to LOGIN the user
    const result = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const resultData = await result.json();

    if (resultData.success) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: resultData
      })
    } else {
      dispatch({
        type: LOGIN_USER_FAIL,
      })
    }
    //return so that in login screen we have access to resultData in our then
    return resultData;

  }
}