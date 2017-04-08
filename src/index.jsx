import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main';
import App from './components/App';
import Registration from './components/registration/Registration';
import Search from './components/search/Search';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const app = document.createElement('div');
app.setAttribute("id", "app");
document.body.insertBefore(app, document.body.firstChild);

const store = createStore(mainReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Search}/>
          <Route path="registration" component={Registration}/>
        </Route>
      </Router>
    </Provider>,
  app
);