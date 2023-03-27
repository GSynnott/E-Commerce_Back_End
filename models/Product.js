// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //Auto ID column, Integer, Not Null, primary Key
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    //string, not null
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //decimal, not null, validate to make sure it is a decimal
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
      },
    },
    //integer, not null, default value 10, validate to make sure it is a number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate:{
        isNumeric: true,
      },
    },
    //integer, references category model ID column as a foreign key
    category_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
