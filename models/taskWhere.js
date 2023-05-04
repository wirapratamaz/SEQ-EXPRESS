// operation untuk where query
const Task = require('./models').Task;

Task.findAll({
  where: {
    dueDate: {
      [Op.gte]: new Date('2023-05-01')
    }
  }
}).then(tasks => {
  console.log(tasks);
}).catch(err => {
  console.log(err);
});
