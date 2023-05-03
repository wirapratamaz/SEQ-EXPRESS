const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Book extends Model {}

Book.init(
  {
    // attributes
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // options
    sequelize,
    timestamps: false,
  }
);

module.exports = Book;
