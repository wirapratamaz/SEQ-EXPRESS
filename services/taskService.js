const Task = require('../models/task');
const taskRepository = require('../repository/taskRepository');

module.exports = {
  async getIncompleteTasks() {
    return taskRepository.getIncompleteTasks();
  },

  async createTask(description, dueDate, status, completed) {
    return Task.createNewTask(description, dueDate, status, completed);
  },

  async getTaskById(id) {
    return Task.findTaskById(id);
  },

  async getAllTasks() {
    return Task.findAllTasks();
  },

  async updateTaskById(id, fields) {
    return Task.updateTaskById(id, fields);
  },

  async deleteTaskById(id) {
    return Task.deleteTaskById(id);
  }
};
