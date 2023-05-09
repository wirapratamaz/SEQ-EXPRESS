const express = require('express');
const app = express();
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Import Routes
const usersRoutes = require('./routes/userRoute');
const tasksRoutes = require('./routes/taskRoute');
const emailRoutes = require('./routes/emailRoute');

// Initialize Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

//membuat write stream ke file log
// { flags: 'a' } menunjukkan bahwa stream harus ditambahkan ke akhir file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(multer().any()); // any() allows handling all types of HTTP requests
app.use(morgan('combined', {
  stream: accessLogStream
}));

// Use Routes
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

// Start Server
app.listen(3000, () => console.log('Server started on port 3000'));
