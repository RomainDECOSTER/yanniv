module.exports = socket => {
  const controllers = require('../controllers/sockets/controllers');
  const routesConstants = {
    gameCreate: 'game/create',
  };
  return {
    routes: [
      {
        path: routesConstants.gameCreate,
        callback: data => {
          controllers.game.create(socket, data);
        },
      },
    ],
  };
};
