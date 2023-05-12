const taskService = require('../services/taskService');
const { CustomError } = require('../middlewares/errorMiddleware');

module.exports = {
  async getIncompleteTasks(req, res, next) {
    try {
      const tasks = await taskService.getIncompleteTasks();
      res.status(200).json(tasks);
    } catch (error) {
      next(new CustomError('Internal Server Error', 500));
    }
  },

  async createTask(req, res, next) {
    const { description, dueDate, status, completed } = req.body;

    try {
      const newTask = await taskService.createTask(description, dueDate, status, completed);
      res.status(201).json(newTask);
    } catch (error) {
      next(new CustomError('Internal Server Error', 500));
    }
  },

  async getTaskById(req, res, next) {
    const { id } = req.params;

    try {
      const task = await taskService.getTaskById(id);
      if (!task) {
        throw new CustomError('Task not found', 404);
      }
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  },

  async getAllTasks(req, res, next) {
    try {
      const tasks = await taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      next(new CustomError('Internal Server Error', 500));
    }
  },

  async updateTaskById(req, res, next) {
    const { id } = req.params;
    const fields = req.body;

    try {
      const updatedTask = await taskService.updateTaskById(id, fields);
      if (updatedTask[0] === 0) {
        throw new CustomError('Task not found', 404);
      }
      res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
      next(error);
    }
  },

  async deleteTaskById(req, res, next) {
    const { id } = req.params;

    try {
      const deletedTask = await taskService.deleteTaskById(id);
      if (!deletedTask) {
        throw new CustomError('Task not found', 404);
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
};
