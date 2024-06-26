'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
      await queryInterface.bulkInsert('Appointments', [
        {
        appointment_date: '2024-06-08',
        user_id: 2,
        service_id: 3
      },
        {
        appointment_date: '2024-06-08',
        user_id: 4,
        service_id: 2
      },
        {
        appointment_date: '2024-06-08',
        user_id: 4,
        service_id: 1
      },
        {
        appointment_date: '2024-06-08',
        user_id: 2,
        service_id: 3
      },
        {
        appointment_date: '2024-06-09',
        user_id: 3,
        service_id: 1
      },
        {
        appointment_date: '2024-06-09',
        user_id: 4,
        service_id: 2
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     **/
      await queryInterface.bulkDelete('Appointments', null, {});
  }
};