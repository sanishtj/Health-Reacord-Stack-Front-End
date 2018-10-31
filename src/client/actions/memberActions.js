import * as actionTypes from './actionTypes';
import memberAPI from '../api/mockMemberAPI';

export function loadMembersSuccess(members) {
  return { type: actionTypes.LOAD_MEMBERS_SUCCESS, members };
}

export function fetchMembers() {
  return dispatch => memberAPI
    .fetchMembers()
    .then(members => dispatch(loadMembersSuccess(members)))
    .catch();
}

export function addMembersSuccess(newmember) {
  return { type: actionTypes.ADD_MEMBER_SUCCESS, newmember };
}

export function addMember(member) {
  return dispatch => memberAPI
    .addMember(member)
    .then(newmember => dispatch(addMembersSuccess(newmember)))
    .catch();
}

