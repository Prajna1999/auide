'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Branding.init({
    tenant_id: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    color_scheme: DataTypes.STRING,
    font: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Branding',
  });
  return Branding;
};