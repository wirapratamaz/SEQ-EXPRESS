const Task = require('../models').Task;
const User = require('../models').User;

class TaskRepository {
  static async findAllTasksWithUser() { //operasi join table Task and User 
    return Task.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'email']
        }
      ]
    });
  }
}

module.exports = TaskRepository;
