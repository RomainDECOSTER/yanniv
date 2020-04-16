module.exports = {
  bryctp_salt: 10,
  mongo: {
    protocol: process.env.MONGO_PROTOCOL || 'mongodb://',
    host: process.env.MONGO_HOST || 'SG-Laclev1-22875.servers.mongodirector.com',
    username: process.env.MONGO_USER || 'yanniv',
    password: process.env.MONGO_PASSWORD || 'yannivtest17032020',
    database: process.env.MONGO_DATABASE || 'yanniv',
  },
  setAccessControlHeaders: function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Max-Age', 604800);
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-requested-with, x-requested-by, x-access-token, x-refresh-token, x-confirm-token, x-hmac');

    // If an OPTIONS request is received, answer 200 with the headers
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  },
};
