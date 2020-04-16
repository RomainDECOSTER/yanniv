import { call, put, select, takeEvery, all } from 'redux-saga/effects';

import { AuthenticationActionner, LoginType } from './';

const fetchUsername = function*(action) {
  if (action.payload !== null) {
    const token = yield call(AuthenticationActionner.login, action.payload);
    yield put(AuthenticationActionner.setToken(token));
  }
};

const watchUsername = function*() {
  yield takeEvery(LoginType.USERNAME_SET, fetchUsername);
};

const AuthenticationSaga = function*() {
  yield all([watchUsername()]);
};

export { AuthenticationSaga };
