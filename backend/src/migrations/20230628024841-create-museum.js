'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Museums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      museum_id: {
        type: Sequelize.INTEGER
      },
      museum_name: {
        type: Sequelize.STRING
      },
      // address_id: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'Addresses',
      //     key:'address_id',
      //   },
      //   onUpdate:'CASCADE',
      //   onDelete:'SET NULL',
      // },
      contact_info: {
        type: Sequelize.TEXT
      },
      // branding_id: {
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:'Brandings',
      //     key:'branding_id',
      //   },
      //   onUpdate:'CASCADE',
      //   onDelete:'SET NULL'
      // },
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
    await queryInterface.dropTable('Museums');
  }
};