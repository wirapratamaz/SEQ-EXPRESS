const Task = require('../models/task');
const taskRepository = require('../repository/taskRepository')

module.exports = {
    async getIncompleteTasks(req, res) {
        try {
            const tasks = await taskRepository.getIncompleteTasks();
            res.status(200).json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async createTask(req, res) {
        const { description, dueDate, status, completed } = req.body;

        try {
            const newTask = await Task.createNewTask(description, dueDate, status, completed);
            res.status(201).json(newTask);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    async getTaskById(req, res) {
        const { id } = req.params;

        try {
            const task = await Task.findTaskById(id);
            if (!task) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json(task);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAllTasks();
            res.status(200).json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    async updateTaskById(req, res) {
        const { id } = req.params;
        const fields = req.body;

        try {
            const updatedTask = await Task.updateTaskById(id, fields);
            if (updatedTask[0] === 0) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json({ message: 'Task updated successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    async deleteTaskById(req, res) {
        const { id } = req.params;

        try {
            const deletedTask = await Task.deleteTaskById(id);
            if (!deletedTask) {
                res.status(404).json({ message: 'Task not found' });
            } else {
                res.status(200).json({ message: 'Task deleted successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};
