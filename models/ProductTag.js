const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    //Auto ID column, Integer, Not Null, primary Key
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //integer, references product model ID column as foreign key
    product_id:{
      type:DataTypes.INTEGER,
      references:{
        model: "product",
        key: "id",
      },
    },
    //integer, references tag model ID column as foreign key
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
