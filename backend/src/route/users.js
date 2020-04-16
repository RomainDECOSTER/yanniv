const { users } = require('../controllers');

module.exports = (app, router) => {
  router.get('/users', users.get);
  router.post('/users', users.save);
};
