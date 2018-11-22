import { combineReducers } from 'redux';
import memberProps from './memberReducer';
import authuser from './authenticationReducer';

const rootReducer = combineReducers({
  memberProps,
  authuser,
});

export default rootReducer;
