import io from 'socket.io-client';

const socketServerURL = 'http://localhost:8080';

const SocketTypes = {
  CONNECT: 'SOCKET_CONNECT',
  CONNECTED: 'SOCKET_CONNECTED',
  DISCONNECTED: 'SOCKET_DISCONNECTED',
  CONNECT_FAIL: 'SOCKET_CONNECT_FAIL',
  RECONNECT: 'SOCKET_RECONNECT',
};

const SocketActionner = {
  setConnect: () => ({
    type: SocketTypes.CONNECT,
  }),

  setConnected: socket => ({
    type: SocketTypes.CONNECTED,
    payload: socket,
  }),

  setDisconnect: () => ({
    type: SocketTypes.DISCONNECTED,
  }),

  setConnectFailure: () => ({
    type: SocketTypes.CONNECT_FAIL,
  }),

  setReconnect: () => ({
    type: SocketTypes.RECONNECT,
  }),

  connect: token => {
    const socket = io(socketServerURL + `?token=${token}`);
    return new Promise((resolve, reject) => {
      socket.on('connect', () => {
        resolve(socket);
      });
      socket.on('error', reason => {
        reject(reason);
      });
    });
  },

  disconnect: socket => {
    return new Promise(resolve => {
      socket.on('disconnect', () => {
        resolve(true);
      });
    });
  },

  reconnect: socket => {
    return new Promise(resolve => {
      socket.on('reconnect', () => {
        resolve(true);
      });
    });
  },
};

export { SocketTypes, SocketActionner };
