const socketConfigs = require('../config/socker-configs');

module.exports = socket => {
  socketConfigs(socket).routes.forEach(route => {
    socket.on(route.path, route.callback);
  });
};
