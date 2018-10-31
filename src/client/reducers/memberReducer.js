import * as actionTypes from '../actions/actionTypes';

export default function memberReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_MEMBERS_SUCCESS:
      return action.members;
    case actionTypes.ADD_MEMBER_SUCCESS:
      return [...state, {}, action.newmember];
    default:
      return state;
  }
}
