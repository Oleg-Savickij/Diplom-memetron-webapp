import fetch from 'isomorphic-fetch';

export function setSearchId(id) {
  return {
    type: 'SET_SEARCH_ID',
    id,
  };
}

function createSearchingBody(id) {
  return {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
    }),
  };
}

export function trimSearchId() {
  return {
    type: 'TRIM_SEARCH_ID',
  };
}

export const searchMeetUps = () => (dispatch, getState) => {
  fetch('/api/search', createSearchingBody(getState().getIn(['search', 'id'])))
    .then(response => response.json())
    .then(user => {
      dispatch(hideModalDialog());
      dispatch(setUser(user));
    });
};