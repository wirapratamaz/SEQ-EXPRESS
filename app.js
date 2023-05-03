const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');

const app = express();

// Passing parameters database (other dialects)
const sequelize = new Sequelize('xcidic-sequelize', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

// middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// routes
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

(async () => {
  try {
    await sequelize.authenticate(); // test connection database
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});