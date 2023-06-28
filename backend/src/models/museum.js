'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Museum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tenant, { foreignKey: 'id' });
      this.hasMany(models.Address, { foreignKey: 'id' });
      this.hasMany(models.Exhibit, { foreignKey: 'id' });
    }
  }
  Museum.init({
    tenant_id: DataTypes.STRING,
    museum_name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Museum',
  });
  return Museum;
};