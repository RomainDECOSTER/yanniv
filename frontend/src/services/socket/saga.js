import { call, put, fork, select, takeEvery, all, takeLatest, delay } from 'redux-saga/effects';

import { SocketActionner } from '.';
import { LoginType } from '..';
import { AuthenticationActionner } from '../login';
import { SocketTypes } from './actioner';

// connection monitoring sagas
const listenDisconnectSaga = function*(socket) {
  const state = yield select();
  do {
    const isDisconnect = yield call(SocketActionner.disconnect, socket);
    if (isDisconnect) {
      yield put(SocketActionner.setDisconnect());
    }
  } while (state.Socket.connected);
};

const listenReconnectSaga = function*(socket) {
  const state = yield select();
  do {
    const isReconnect = yield call(SocketActionner.reconnect, socket);
    if (isReconnect) {
      yield put(SocketActionner.setReconnect());
    }
  } while (state.Socket.connected);
};

const listenServerSaga = function*(action) {
  try {
    yield put(SocketActionner.setConnect());
    const socket = yield call(SocketActionner.connect, action.payload);
    yield put(SocketActionner.setConnected(socket));
    yield put(AuthenticationActionner.setLoggedId());
    yield fork(listenDisconnectSaga, socket);
    yield fork(listenReconnectSaga, socket);
  } catch (err) {
    console.log('err', err);
    yield call(SocketActionner.setConnectFailure);
  }
};

const watchTokenSet = function*() {
  yield takeLatest(LoginType.SET_AUTH, listenServerSaga);
};

const startStopServer = function*() {
  yield all([watchTokenSet()]);
};

export { startStopServer };
