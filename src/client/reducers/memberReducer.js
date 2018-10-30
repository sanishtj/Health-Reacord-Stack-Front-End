import * as actionTypes from '../actions/actionTypes';

export default function memberReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_MEMBER:
      return [...state, Object.assign({}, action.member)];
    default:
      return state;
  }
}
