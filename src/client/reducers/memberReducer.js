import * as actionTypes from '../actions/actionTypes';

const initialState = {
  pageMenu: [
    {
      class: 'fa-user-plus',
      text: 'Add Member',
    },
    {
      class: 'fa-user',
      text: 'Member Details',
    },
    {
      class: 'fa-pencil-square-o',
      text: 'Edit Member',
    },
    {
      class: 'fa-trash-o',
      text: 'Remove Member',
    },
    {
      class: 'fa-file-text',
      text: 'View Medical History',
    },
  ],
  members: [],
};

export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MEMBERS_SUCCESS:
      return Object.assign({}, state, { members: action.members });
    case actionTypes.ADD_MEMBER_SUCCESS:
      return [...state, {}, action.newmember];
    default:
      return state;
  }
}
