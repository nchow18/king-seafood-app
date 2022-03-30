const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {

}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sale_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bulk_qty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bulk_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    featured: {
      type: DataTypes.STRING,
      allowNull: false
    },
    new_product: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }  
)

module.exports = Product;