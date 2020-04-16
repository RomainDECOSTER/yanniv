const mongoose = require('mongoose');

const config = require('../config/application');

/*

  Connection to yanniv

*/

const optionsData = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true };
const yannivData = mongoose.createConnection(`${config.mongo.protocol}${config.mongo.username}:${config.mongo.password}@${config.mongo.host}/${config.mongo.database}`, optionsData);

yannivData.on('connected', function(ref) {
  console.log('[MONGO] : connected');
  config.maintenance = false;
});

yannivData.on('disconnected', function(ref) {
  console.log('[MONGO] : disconnected');
  config.maintenance = true;
});

yannivData.on('close', function(ref) {
  console.log('[MONGO] : close');
  config.maintenance = true;
});

module.exports = {
  yanniv_data: yannivData,
};
