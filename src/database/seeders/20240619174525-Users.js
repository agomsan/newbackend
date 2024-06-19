'use strict';
const bcrypt = require("bcrypt");
const plainPassword = "12345678";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *    */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "Admin",
          last_name: "Root",
          email: "root@root.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 1
        },
        {
          id: 2,
          first_name: "Jose",
          last_name: "Pozuelo",
          email: "jpozuelo@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2
        },
        {
          id: 3,
          first_name: "Lola",
          last_name: "Mento",
          email: "lolamento@icloud.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 4,
          first_name: "Aitor",
          last_name: "Suarez",
          email: "Asuarez@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 5,
          first_name: "David",
          last_name: "Marco",
          email: "dmarco@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 6,
          first_name: "Manuel",
          last_name: "Chen",
          email: "mchen@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 7,
          first_name: "Francisco",
          last_name: "Luz",
          email: "fluz@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 8,
          first_name: "Ana",
          last_name: "Mataró",
          email: "amataro@gmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3
        },
        {
          id: 9,
          first_name: "Juana",
          last_name: "Gálvez",
          email: "jgalvez@hotmail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4
        },
        {
          id: 10,
          first_name: "Benito",
          last_name: "Rodríguez",
          email: "brodriguez@yahoo.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4
        },
      ],
      {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     **/
    await queryInterface.bulkDelete('users', null, {});

  }
};