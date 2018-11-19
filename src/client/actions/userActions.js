import history from '../helpers/history';
import * as actionTypes from './actionTypes';
import userAPI from '../api/mockUserAPI';
import alertActions from './alertActions';


export function request(user) {
  return { type: actionTypes.LOGIN_REQUEST, user };
}
export function success(user) {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}
export function failure(error) {
  return { type: actionTypes.LOGIN_FAILURE, error };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userAPI.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/members');
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      },
    );
  };
}

export function showLoginForm() {
  return { type: actionTypes.SHOW_LOGIN };
}

export function showRegisterForm() {
  return { type: actionTypes.SHOW_REGISTER };
}

export function showForgotPasswordForm() {
  return { type: actionTypes.SHOW_FORGOTPASSWORD };
}


// export function logout() {
//   userService.logout();
//   return { type: userConstants.LOGOUT };
// }

// export function register(user) {
//   return dispatch => {
//     dispatch(request(user));

//     userService.register(user).then(
//       user => {
//         dispatch(success());
//         history.push("/login");
//         dispatch(alertActions.success("Registration successful"));
//       },
//       error => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };

//   function request(user) {
//     return { type: userConstants.REGISTER_REQUEST, user };
//   }
//   function success(user) {
//     return { type: userConstants.REGISTER_SUCCESS, user };
//   }
//   function failure(error) {
//     return { type: userConstants.REGISTER_FAILURE, error };
//   }
// }
