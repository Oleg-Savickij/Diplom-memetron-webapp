import { Map, fromJS } from 'immutable';


function setUserField(state, field, value) {
  return state.set(field, fromJS(value));
}

function setUser(state, company) {
  return state.merge(fromJS(company));
}

function trimUserField(state, field) {
  return state.updateIn([field], value => (value || '').trim());
}

export default function (state = new Map(), action) {
  switch (action.type) {
    case 'USER_SET_FIELD' :
      return setUserField(state, action.field, action.value);
    case 'USER_TRIM_FIELD' :
      return trimUserField(state, action.field);
    case 'USER_COMPANY' :
      return setUser(state, action.company);
    default:
      return state;
  }
}