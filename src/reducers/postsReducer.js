import _ from 'lodash';

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'FETCH_POSTS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_POST':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
