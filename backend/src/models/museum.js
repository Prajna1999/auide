'use strict';
const {
  Model
} = require('sequelize');

const sequelize=require('../utils/db')
module.exports = (sequelize, DataTypes) => {
  class Museum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Address, {foreignKey:'address_id'});
      // this.belongsTo(models.Branding, {foreignKey:'branding_id'})
    }
  }
  Museum.init({
    museum_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    museum_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // address_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Addresses', // replace with your actual address table name
    //     key: 'id'
    //   }
    // },
    contact_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // branding_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Brandings', // replace with your actual branding table name
    //     key: 'id'
    //   }
    // },
  }, {
    sequelize,
    modelName: 'Museum',
  });
  return Museum;
};