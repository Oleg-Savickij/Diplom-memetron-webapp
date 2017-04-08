import { Map } from 'immutable';

function showModal(state, modalType, modalProps) {
  return state.clear().set('modalType', modalType).set('modalProps', modalProps);
}

function hideModal(state) {
  return state.clear().set('modalType', null).set('modalProps', {});
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return showModal(state, action.modalType, action.modalProps);
    case 'HIDE_MODAL':
      return hideModal(state);
    default:
      return state;
  }
}
