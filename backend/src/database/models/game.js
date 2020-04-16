const mongoose = require('mongoose');

const { yanniv_data } = require('../mongoose-connector');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const Player = new Schema({
  user: { type: Types.ObjectId, ref: 'Users' },
  score: { type: Types.Number },
});

const Game = new Schema({
  players: [{ type: Player }],
  name: { type: Types.String },
  status: { type: Types.Boolean },
  owner: { type: Player },
});

module.exports = yanniv_data.model('Games', Game);
