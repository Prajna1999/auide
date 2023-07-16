// migrations/20230716120000-create-users.js

'use strict';
const bcrypt=require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenant_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Tenants",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"SET NULL"
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_role: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'curator', 'staff'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
