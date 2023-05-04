const express = require('express');
const router = express.Router();
const taskRepository = require('../repository/taskRepository');

router.get('/', async (req, res) => {
  const tasks = await taskRepository.getAllTasks();
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await taskRepository.getTaskById(req.params.id);
  res.json(task);
});

router.get('/unfinished', async (req, res) => {
  const tasks = await taskRepository.getUnfinishedTasks();
  res.json(tasks);
});

module.exports = router;
