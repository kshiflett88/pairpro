import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth'

const RootReducer = combineReducers({
  alert,
  auth
});

export default RootReducer;