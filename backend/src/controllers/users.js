const bcrypt = require('bcrypt');

const config = require('../config/application');
const { Users } = require('../database/models');
module.exports = {
  get: (req, res) => {
    Users.find()
      .exec()
      .then(users => {
        res.json(users);
      });
  },
  save: (req, res) => {
    const user = new Users(req.body);
    bcrypt.hash(user.username, '$2b$10$QylAUE1q1dlqPSto4UKqVu', (err, hash) => {
      user.password = hash;
      user.save().then(() => res.json());
    });
  },
};
