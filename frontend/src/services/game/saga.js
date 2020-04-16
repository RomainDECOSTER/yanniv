import { select, call, takeEvery, all } from 'redux-saga/effects';

import { GameActionner, GameType } from '.';

const getSocket = function*() {
  const state = yield select();
  return state.Socket.socket;
};

const createGame = function*(action) {
  const socket = yield call(getSocket);
  socket.emit('game/create', { name: action.payload });
};

const createSaga = function*() {
  yield takeEvery(GameType.CREATED, createGame);
};

const GameSaga = function*() {
  yield all([createSaga()]);
};

export { GameSaga };
