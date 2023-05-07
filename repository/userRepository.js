const { User, sequelize } = require('../models/user');

module.exports = {
  async getAllUsers() {
    return User.findAll();
  },

  async getUserById(id) {
    return User.findByPk(id);
  },

  async getUserStats(){
    try {
      const result =  await User.findOne({ //mengambil hasil perhitungan dari tabel user
        attributes :[
          //*sequelize.fn -> memanggil fungsi agregat SQL
          //*sequelize.col -> memilih kolom yang dihitung
          [sequelize.fn('count', sequelize.col('*')), 'totalUsers'],
          [sequelize.fn('average', sequelize.col('age')), 'averageAge'],
        ],
        raw: true
      });
      return result
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong')
    }
  }
};
