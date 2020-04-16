import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { appReducers } from './services';

const saga = createSagaMiddleware();

const middlewares = [thunk, saga];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const appStore = createStore(appReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export { appStore, saga };
