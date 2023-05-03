const { Book } = require("../models/book");
const Author = require("../models/author");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.findAll({
        include: Author,
      });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getBookById: async (req, res) => {
    const bookId = req.params.id;
    try {
      const book = await Book.findByPk(bookId, {
        include: Author,
      });
      if (book === null) {
        res.status(404).json({ message: "Book not found" });
      } else {
        res.status(200).json(book);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createBook: async (req, res) => {
    const { title, description, price, year, author_id } = req.body;
    try {
      const author = await Author.findByPk(author_id);
      if (!author) {
        res.status(404).json({ message: "Author not found" });
      } else {
        const book = await Book.create({
          title,
          description,
          price,
          year,
          author_id,
        });
        res.status(201).json(book);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, price, year, authorId } = req.body;

      // get the book to be updated from database
      const book = await Book.findByPk(id);

      // check if book exists in the database
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      // get the author to be associated with the book from database
      const author = await Author.findByPk(authorId);

      // check if author exists in the database
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }

      // update the book with new information
      book.title = title;
      book.description = description;
      book.price = price;
      book.year = year;
      book.authorId = authorId;

      await book.save();

      return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteBook: async (req, res) => {
    const bookId = req.params.id;
    try {
      const book = await Book.findByPk(bookId, {
        include: Author,
      });
      if (!book) {
        res.status(404).json({ message: "Book not found" });
      } else {
        await book.destroy();
        res.status(200).json({ message: "Book deleted successfully" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = bookController;
