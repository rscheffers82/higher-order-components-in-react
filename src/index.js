import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

// requireAuth is a function our HOC, when passed a component it will return a component
import requireAuth from './components/require_authentication'
import App from './components/app';
import Home from './components/home';
import Resources from './components/resources';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
