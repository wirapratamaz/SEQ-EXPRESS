const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');

// Routes for authors
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.createAuthor);
router.put('/:id', authorController.updateAuthorById);
router.delete('/:id', authorController.deleteAuthorById);

module.exports = router;
