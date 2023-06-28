'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User, { foreignKey: 'id' });
      this.hasMany(models.Museum, { foreignKey: 'id' });
      this.hasOne(models.Branding, { foreignKey: 'id' });
    }
  }
  Tenant.init({
    tenant_name: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tenant',
  });
  return Tenant;
};