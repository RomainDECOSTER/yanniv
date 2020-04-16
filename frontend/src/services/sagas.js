import { all } from 'redux-saga/effects';

import { startStopServer, AuthenticationSaga, GameSaga } from '.';

export default function* rootSaga() {
  yield all([AuthenticationSaga(), startStopServer(), GameSaga()]);
}
