const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Detail extends Model {
  
}

Detail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    promo_banner: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    promo_discount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    promo_picture: {
      type: DataTypes.STRING,
      allowNull: false      
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'detail'
  }  
)

module.exports = Detail;