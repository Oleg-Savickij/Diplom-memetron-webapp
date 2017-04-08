import { Map } from 'immutable';

import userReducers from './user';
import modalReducers from './modal';
import searchReducers from './search';

export default function (state = Map(), action) {
  return state
    .update('user', state => userReducers(state, action))
    .update('modal', state => modalReducers(state, action))
    .update('search', state => searchReducers(state, action));
}
