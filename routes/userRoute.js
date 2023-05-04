const express = require('express');
const router = express.Router();
const userRepository = require('../repository/userRepository');

router.get('/', async (req, res) => {
  const users = await userRepository.getAllUsers();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await userRepository.getUserById(req.params.id);
  res.json(user);
});

module.exports = router;
