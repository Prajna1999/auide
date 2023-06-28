'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brandings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenant_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Tenants",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      logo: {
        type: Sequelize.STRING
      },
      color_scheme: {
        type: Sequelize.STRING
      },
      font: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Brandings');
  }
};