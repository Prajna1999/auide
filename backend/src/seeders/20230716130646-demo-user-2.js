'use strict';
const bcrypt=require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('1234', 10);
    await queryInterface.bulkInsert('Users', [
      {
        tenant_id:2,
        user_name:"curato2",
        user_email:"curator2@museum.com",
        user_password:hashedPassword,
        user_role:"curator",
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
