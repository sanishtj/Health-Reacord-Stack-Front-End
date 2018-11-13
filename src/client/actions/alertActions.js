import * as actionTypes from './actionTypes';

export function success(message) {
  return { type: actionTypes.ALERT_SUCCESS, message };
}

export function error(message) {
  return { type: actionTypes.ALERT_ERROR, message };
}

export function clear() {
  return { type: actionTypes.ALERT_CLEAR };
}
