const express = require('express');
const app = express();
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

// Import Routes
const usersRoutes = require('./routes/userRoute');
const tasksRoutes = require('./routes/taskRoute');
const emailRoutes = require('./routes/emailRoute');

// Initialize Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(multer().any()); // any() allows handling all types of HTTP requests

// Use Routes
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);
app.use('/emails', emailRoutes); //email route

// Start Server
app.listen(3000, () => console.log('Server started on port 3000'));
