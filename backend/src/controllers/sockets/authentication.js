const fs = require('fs');
const { Users } = require('../../database/models');

module.exports = {
  authorize: (socket, next) => {
    return Users.findOne({ password: socket.handshake.query.token })
      .exec()
      .then(user => {
        if (user === null) {
          return next(new Error('Token invalid'));
        } else {
          console.log(`${user.username} connected`);
          return next();
        }
      });
  },
};
