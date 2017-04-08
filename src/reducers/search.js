import { Map, fromJS } from 'immutable';

function setSearchId(state, id) {
  return state.set('id', fromJS(id));
}

function trimSearchId(state) {
  return state.update('id', value => (value || '').trim());
}

export default function (state = new Map(), action) {
  switch (action.type) {
    case 'SET_SEARCH_ID' :
      return setSearchId(state, action.id);
    case 'TRIM_SEARCH_ID' :
      return trimSearchId(state);
    default:
      return state;
  }
}