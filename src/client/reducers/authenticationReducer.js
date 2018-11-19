import * as actionTypes from '../actions/actionTypes';

const user =  typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null;
const initialState = user
  ? { loggedIn: true, user }
  : {
    isLoginForm: true,
    isRegisterForm: false,
    isForgotPasswordForm: false,
  };

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
    case actionTypes.SHOW_LOGIN:
      return Object.assign(
        {},
        {
          isLoginForm: true,
          isRegisterForm: false,
          isForgotPasswordForm: false,
        },
      );
    case actionTypes.SHOW_REGISTER:
      return Object.assign(
        {},
        {
          isLoginForm: false,
          isRegisterForm: true,
          isForgotPasswordForm: false,
        },
      );
    case actionTypes.SHOW_FORGOTPASSWORD:
      return Object.assign(
        {},
        {
          isLoginForm: false,
          isRegisterForm: false,
          isForgotPasswordForm: true,
        },
      );
    default:
      return state;
  }
}
