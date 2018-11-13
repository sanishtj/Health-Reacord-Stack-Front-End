import { combineReducers } from 'redux';
import members from './memberReducer';
import authuser from './authenticationReducer';

const rootReducer = combineReducers({
  members,
  authuser,
});

export default rootReducer;
