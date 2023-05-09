
## Model and Migration

[Documentation](https://sequelize.org/docs/v6/getting-started/)


## Studi Kasus

-Implementasi query untuk mengambil data dengan kondisi tertentu menggunakan WHERE clauses (misalnya mengambil daftar tugas yang belum selesai dengan dueDate kurang dari 7 hari ke depan).<br>
-Implementasi fungsi agregat dengan sequelize.fn dengan melakukan perhitungan jumlah total pengguna dan nilai rata-rata umur di tabel users. sequelize.col('*') untuk memilih semua kolom pada tabel. <br>
-Penggunaan Sequelize dengan kondisi WHERE dan GROUP BY <br>

## Tambahan operation sequelize
-Op.lt: operator less than, digunakan untuk mencari nilai yang lebih kecil dari nilai yang diberikan. <br>
-Op.gt: operator greater than, digunakan untuk mencari nilai yang lebih besar dari nilai yang diberikan. <br>
-Op.ne: operator not equal, digunakan untuk mencari nilai yang tidak sama dengan nilai yang diberikan. <br>
-Op.not: operator not, digunakan untuk mencari nilai yang tidak null atau bukan nilai yang diberikan. <br>
-Op.is: operator is, digunakan untuk mencari nilai yang sama dengan nilai yang diberikan.

## Tambahan JOIN
-Pada method getAllUsers(), terdapat penggunaan required: false pada attribute yang didefinisikan pada include options, sehingga left join dapat diimplementasikan.<br>
-Pada method getAllOrders(), terdapat penggunaan required: false pada attribute yang didefinisikan pada include options, sehingga right join dapat diimplementasikan.<br>