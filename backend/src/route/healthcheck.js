const contollers = require('../controllers');

module.exports = (app, router) => {
  router.get('/healthcheck', contollers.healthcheck.healthcheck);
};
