
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';

import * as reducers from './src/reducers';
import sagaRoot from './src/sagas';
import Home from './src/Home/screens/Home';

const middlewares = [];
const reducer = combineReducers(reducers);
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(sagaRoot);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
