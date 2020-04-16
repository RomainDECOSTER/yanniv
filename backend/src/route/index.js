module.exports = (app, router) => {
  require('./healthcheck')(app, router);
  require('./users')(app, router);
};
