const { Op } = require('sequelize');
const { Task } = require('../models/task');

module.exports = {
  async getAllTasks() {
    return Task.findAll();
  },

  async getTaskById(id) {
    return Task.findByPk(id);
  },

  async getIncompleteTasks() {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    return Task.findAll({
      where: { //where filter hasil query
        completed: false,//filter task
        dueDate: {
          [Op.lt]: nextWeek, // kurang dari minggu depan
          [Op.gt]: today, //lebih dari hari ini
        },
        description: { //filter task untuk deskripsi bukan 'N/A'
          [Op.ne]: 'N/A'
        },
        status: { //filter task status tidak null dan active
          [Op.all]: literal(['active', 'inactive']), //mencari data yang memiliki status semua status
          [Op.not]: null,
          [Op.is]: 'active'
        }
      },
    });
  },

  async getTaskGroupByCategory(){
    return Task.findAll({
      attributes: ['category', //menampilkan atribut yg dipakai
      [sequelize.fn('COUNT', sequelize.col('id')), 'count']], //hitung task berdasarkan atribut
      where: {
        completed: false, // cari task belum selesai
        status: 'active' // cari task status aktif
      },
      group: ['category'] // mengelompokkan hasil query berdasarkan atribut category
    });
  }
};
