'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey:"id"});
      this.belongsTo(models.Tenant, {foreignKey:"id"});
      
    }
  }
  Permission.init({
    user_id: DataTypes.INTEGER,
    tenant_id: DataTypes.INTEGER,
    role:{
      type:DataTypes.ENUM('admin', 'staff', 'viewer'),
      
      defaultValue:'viewer'
    }
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};