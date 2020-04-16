import { SocketTypes } from '.';

const initialState = {
  connected: false,
  connect: false,
  socket: null,
  disconneted: false,
};

const SocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SocketTypes.CONNECT:
      return { ...state, connect: true };
    case SocketTypes.CONNECTED:
      return { ...state, connected: true, socket: action.payload, disconneted: false };
    case SocketTypes.DISCONNECTED:
      return { ...state, connect: false, connected: false, disconneted: true };
    case SocketTypes.CONNECT_FAIL:
      return initialState;
    case SocketTypes.RECONNECT:
      return { ...state, connected: true };
    default:
      return state;
  }
};

export { SocketReducer };
