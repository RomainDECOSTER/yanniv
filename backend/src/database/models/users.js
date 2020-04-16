const mongoose = require('mongoose');

const { yanniv_data } = require('../mongoose-connector');

const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const Users = Schema({
  username: { type: Types.String },
  password: { type: Types.String },
});

module.exports = yanniv_data.model('Users', Users);
