const { Op } = require('sequelize');
const { Task } = require('../models/task');

module.exports = {
  async getAllTasks() {
    return Task.findAll();
  },

  async getTaskById(id) {
    return Task.findByPk(id);
  },

  async getIncompleteTasks() {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    return Task.findAll({
      where: {
        completed: false,
        dueDate: {
          [Op.lt]: nextWeek,
        },
      },
    });
  },
};
