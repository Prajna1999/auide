'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tenants',[{
      tenant_name:'Louvre',
      contact_email:'admin@louvre.com',
      contact_number:"9876674838",
      createdAt:new Date(),
      updatedAt:new Date()
    }] )
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
