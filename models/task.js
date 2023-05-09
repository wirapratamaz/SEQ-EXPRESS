'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static createNewTask(description, dueDate, status, completed) {
      return Task.create({
        description: description,
        dueDate: dueDate,
        status: status,
        completed: completed
      });
    }

    static findTaskById(id) {
      return Task.findByPk(id);
    }

    static findAllTasks() {
      return Task.findAll();
    }

    static updateTaskById(id, fields) {
      return Task.update(fields, {
        where: { id: id }
      });
    }

    static deleteTaskById(id) {
      return Task.destroy({
        where: { id: id }
      });
    }

    static findTasksByFilter(filter) {
      return Task.findAll({
        where: filter
      });
    }
  }

  Task.init({
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    status: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
