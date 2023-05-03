const { Author } = require('../models/author');
const Book = require("../models/book");


const authorController = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.findAll({
        include: {
          model: Book,
          attributes: ['id', 'title'],
        },
      });
      res.status(200).json(authors);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAuthorById: async (req, res) => {
    try {
      const author = await Author.findByPk(req.params.id, {
        include: {
          model: Book,
          attributes: ['id', 'title'],
        },
      });
      if (!author) {
        res.status(404).json({ message: 'Author not found' });
      } else {
        res.status(200).json(author);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createAuthor: async (req, res) => {
    try {
      const { name, email, country } = req.body;
      const author = await Author.create({ name, email, country });
      res.status(201).json(author);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  },

  updateAuthorById: async (req, res) => {
    try {
      const authorId = req.params.id;
      const { name, email, country } = req.body;

      const author = await Author.findByPk(authorId);
      if (!author) {
        res.status(404).json({ message: 'Author not found' });
      } else {
        author.name = name;
        author.email = email;
        author.country = country;
        await author.save();
        res.status(200).json(author);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteAuthorById: async (req, res) => {
    try {
      const authorId = req.params.id;
      const author = await Author.findByPk(authorId);
      if (!author) {
        res.status(404).json({ message: 'Author not found' });
      } else {
        await author.destroy();
        res.status(204).json();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = authorController;
