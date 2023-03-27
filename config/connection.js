//Import sequelize and dotenv
const Sequelize = require('sequelize');
require('dotenv').config();

//Create an instance of sequelize
const sequelize = new Sequelize(
  //grab all login information from the .env file.
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;