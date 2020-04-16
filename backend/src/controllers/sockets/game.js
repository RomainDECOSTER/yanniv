const { Games } = require('../../database/models');
const config = require('../../config/application');
const entity = require('../../tools/entity');

module.exports = {
  create: (socket, data) => {
    entity.getEntity(socket).then(user => {
      Games.findOne({ name: data.name }).then(game => {
        if (game === null) {
          let players = [
            {
              user: user._id,
              score: 0,
            },
          ];
          const game = new Games({ name: data.name, players });
          game.save().then(gameSaved => {
            console.log('game created');
            socket.join(gameSaved._id, err => {
              if (err) {
                console.log(err);
              }
            });
          });
        } else {
          console.log('game re-used');
          socket.join(game._id, err => {
            if (err) {
              console.log(err);
            }
          });
        }
      });
    });
  },
};
