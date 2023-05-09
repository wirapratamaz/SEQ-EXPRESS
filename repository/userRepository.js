const { User, Order, sequelize } = require('../models/user');

module.exports = {
  async getAllUsers() {
    return User.findAll({
      include: [
        {
          model: Order,
          attributes: ['amount'], //attribut yg ingin ditampilkan
          required: false, //set required menjadi false untuk left join
        }
      ]
    });
  },

  async getUserById(id) {
    return User.findByPk(id);
  },

  async getUserStats(){
    try {
      const result =  await User.findOne({ //mengambil hasil perhitungan dari tabel user
        attributes :[ //select from database
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
  },

  //*complex Aggregate function
  async getUserStatsByOrder(){
    try {
      const result = await User.findAll({
        attributes: [
          'id',
          'name',
          [sequelize.fn('count', sequelize.col('Orders.id')), 'totalOrders'],
          [sequelize.fn('sum', sequelize.col('Orders.amount')), 'totalAmount'],
        ],
        include: [ //membuat join dengan User Model
          {
            model: Order,
            attributes: [] // daftar atribut
          }
        ],
        // mengelompokkan hasil query berdasarkan id pengguna.
        group: ['User.id'],
        //mengembalikan hasil query tanpa metadata.
        raw: true
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong')
    }
  },

  //*Implementasi right join table order dan user
  async getAllOrders(){
    try {
      const result = await Order.findAll({
        include: [
          {
            model: User,
            attributes: ['name', 'email'], //attribut yg ingin ditampilkan
            required: false, //set required menjadi false untuk right join
          }
        ]
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong')
    }
  },
};
