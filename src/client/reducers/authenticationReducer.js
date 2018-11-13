import * as actionTypes from '../actions/actionTypes';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case actionTypes.LOGIN_FAILURE:
      return {};
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}
