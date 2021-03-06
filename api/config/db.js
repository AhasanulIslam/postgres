const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.Database, process.env.User, process.env.Password, {
    dialect: process.env.Db_dialect,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false 
        }
      },
    host: process.env.Host
    // logging: true
});

module.exports = sequelize;
