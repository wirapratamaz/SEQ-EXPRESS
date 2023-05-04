const express = require('express');
const app = express();
const sequelize = require('./sequelize');

// Import Routes
const usersRoutes = require('./routes/userRoute');
const tasksRoutes = require('./routes/taskRoute');

// Initialize Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Use Routes
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

// Start Server
app.listen(3000, () => console.log('Server started on port 3000'));
