const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('xcidic-sequelize', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;