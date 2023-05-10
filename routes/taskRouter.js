const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const taskController = require('../controllers/taskController');
const { verifyTokenMiddleware } = require('../middlewares/authMiddleware');

router.get('/', verifyTokenMiddleware, taskController.getAllTasks);
router.get('/:id', verifyTokenMiddleware, taskController.getTaskById);
router.get('/incomplete', verifyTokenMiddleware, taskController.getIncompleteTasks);
router.get('/category', verifyTokenMiddleware, taskController.getTaskGroupByCategory);
router.post('/', verifyTokenMiddleware, upload.single('attachment'), taskController.createTask);
router.put('/:id', verifyTokenMiddleware, taskController.updateTask);
router.delete('/:id', verifyTokenMiddleware, taskController.deleteTask);

module.exports = router;
