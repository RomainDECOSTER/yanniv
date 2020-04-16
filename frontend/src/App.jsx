import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import { appStore, saga } from './store';
import rootSaga from './services/sagas';

import Appbar from './components/appbar/Appbar';
// import Plate from './components/game-plate/plate/Plate';
import { Login, Game } from './scenes';

const App = () => (
  <Provider store={appStore}>
    <div>
      <Appbar />
      <Login />
      <Game />
    </div>
  </Provider>
);

saga.run(rootSaga);
export default hot(module)(App);
