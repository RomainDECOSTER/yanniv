const bcrypt = require('bcryptjs');

const LoginType = {
  USERNAME_SET: 'AUTHENTICATION_USERNAME_SET',
  SET_AUTH: 'AUTHENTICATION_SET_AUTH',
  LOG_OUT: 'AUTHENTICATION_LOG_OUT',
  LOGGED_IN: 'ATHENTICATION_LOGGED_IN',
  USERNAME_CHANGE: 'AUTHENTICATION_USERNAME_CHANGE',
};

const AuthenticationActionner = {
  setUsername: username => ({
    type: LoginType.USERNAME_SET,
    payload: username,
  }),

  setToken: token => ({
    type: LoginType.SET_AUTH,
    payload: token,
  }),

  setLogout: () => ({
    type: LoginType.LOG_OUT,
  }),

  setLoggedId: () => ({
    type: LoginType.LOGGED_IN,
  }),

  setUsernameChange: username => ({
    type: LoginType.USERNAME_CHANGE,
    payload: username,
  }),

  login: username => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(username, '$2b$10$QylAUE1q1dlqPSto4UKqVu', (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  },
};

export { LoginType, AuthenticationActionner };
