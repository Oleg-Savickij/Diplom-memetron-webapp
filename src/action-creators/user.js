import fetch from 'isomorphic-fetch';

export function setUserField(field, value) {
  return {
    type: 'USER_SET_FIELD',
    field,
    value,
  };
}

function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export const updateUserField = (field, value) => dispatch => {
  dispatch(setUserField(field, value));
};

export function trimUserField(field) {
  return {
    type: 'USER_TRIM_FIELD',
    field,
  };
}

function createUserBody(user) {
  return {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: user.get('name'),
      password: user.get('password'),
    }),
  };
}

export const login = () => (dispatch, getState) => {
  fetch('/api/login', createUserBody(getState().getIn(['user'])))
    .then(response => response.json())
    .then(user => {
      dispatch(hideModalDialog());
      dispatch(setUser(user));
    });
};
