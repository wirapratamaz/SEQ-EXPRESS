const { User } = require('../models/user');

module.exports = {
  async getAllUsers() {
    return User.findAll();
  },

  async getUserById(id) {
    return User.findByPk(id);
  },
};
