"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          id:1,
          name: "Úrsula",
          Bio: "International artist from México, she is a specialist in the placement of piercings and dilators",
          Specialty:"knowledgable in the placement of piercings and dilators",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:2,
          name: "Joseph",
          Bio: "Joseph is an amazing artist in the placement of tattoo restoration",
          Specialty:"Specialized in the transformation of your existing tattoo",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:3,
          name: "Fran",
          Bio: "Fran is a talented tattoo artist from Spain, his work has gained international recognition",
          Specialty:"He is the designer of the most wanted tattos that we have in our catalog",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:4,
          name: "Lidya",
          Bio: "One of the most talented tattoo artists in the world, her work has been recognized internationally, she is a specialist in fantasy tattoos",
          Specialty:"She is a reference if we are talking about fantasy tattoos, she is the most wanted tattoo artist of the celebrities, Adele and Rihanna's bodies are full of Lidya's art",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:5,
          name: "Demian",
          Bio: "Talented tattoo removal artist born in Spain",
          Specialty:"He is an eminence of the tattoo removal, he has a lot of experience in the transformation of tattoos, with the help of his coworkers, he can make your tattoo dissapear or only remove a part of the tattoo to redesign it",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:6,
          name: "Mariah",
          Bio: "Known worldwide as Mariah, Olivia is her real name",
          Specialty:"Her nick is Mariah because she is the first woman in the world who has tattooed Mariah Carey, she is a specialist in the placement of tattoos in the most intimate parts of the body",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("artists", null, {});
  },
};
