'use strict';
const bcrypt=require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tenant, {foreignKey:"id"});
    }

    static async beforeCreate(user) {
      const hashedPassword = await bcrypt.hash(user.user_password, 10);
      user.user_password = hashedPassword;
    }
  }
  User.init({
    tenant_id: DataTypes.INTEGER,
    user_name:{
      type:DataTypes.STRING,
      allowNull:true,
    
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_role: {
      type: DataTypes.ENUM('admin', 'curator', 'staff'),
      allowNull: false,
    },
  }, {
 
    sequelize,
    modelName: 'User',
  });
  return User;
};