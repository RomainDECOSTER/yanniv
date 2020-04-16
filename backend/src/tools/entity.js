const { Users } = require('../database/models');

module.exports = {
  getEntity: socket => {
    return new Promise((resolve, reject) => {
      Users.findOne({ password: socket.handshake.query.token }).then(user => {
        resolve(user);
      });
    });
  },
};
