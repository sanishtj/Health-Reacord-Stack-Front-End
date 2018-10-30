import * as actionTypes from './actionTypes';

export function addMember(member) {
  return { type: actionTypes.ADD_MEMBER, member };
}

export function editMember(member) {
  return { type: actionTypes.EDIT_MEMBER, member };
}
