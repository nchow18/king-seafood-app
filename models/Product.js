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
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Jet_Black: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Natural_Black: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Darkest_Brown:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Chocolate_Brown:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Chestnut_Brown:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Medium_Brown:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ash_Blonde:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Light_Ash_Blonde:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Honey_Blonde:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Medium_Auburn:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dark_Auburn:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Platinum_Blonde:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Bleach_Blonde:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Plum_Red:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dark_Wine:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    Smokey_Grey:  {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }  
)

module.exports = Product;