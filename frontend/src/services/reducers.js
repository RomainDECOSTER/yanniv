import { combineReducers } from 'redux';

import { AuthenticationReducer, SocketReducer, GameReducer } from '.';

const appReducers = combineReducers({
  Authentication: AuthenticationReducer,
  Socket: SocketReducer,
  Game: GameReducer,
});

export { appReducers };
