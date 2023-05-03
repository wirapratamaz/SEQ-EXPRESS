
## Model and Migration

[Documentation](https://sequelize.org/docs/v6/getting-started/)


## Installation

Install sequelize-cli sebagai dependency global:
```bash
  npm install -g sequelize-cli

```
Generate file migration dengan menjalankan perintah berikut:
```bash
  npx sequelize-cli db:migrate  
```
Perintah ini akan membuat file migration baru dengan nama create_users_table di dalam folder migrations