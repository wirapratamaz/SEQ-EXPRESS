'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
        // association/relasi
      Task.belongsTo(models.User);
    }
  }

  //define atribute/columns
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
