'use strict';
const p = require('./package.json');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const config = require('./src/config/application');
const socketRoutes = require('./src/route/socket');

require('./src/database/mongoose-connector');

const app = express();

app.config = config;

//*********Body Parser Initialization******/
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/** Version config */
const version = express.Router();
app.use('', version);
app.use(`/v${p.version}/`, version);

app.use(app.config.setAccessControlHeaders);

require('./src/route')(app, version);

const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.use(require('./src/controllers/sockets').authentication.authorize);
io.on('connect', socket => {
  console.log('try connect with ' + socket.handshake.query.token);
});
io.on('connection', socket => {
  console.log('loadRoutes');
  socketRoutes(socket);
});
app.config.io = io;

const port = process.env.PORT || 8080;
server.listen(port);

console.log(`listening on http://localhost:${port}`);

module.exports = server;
