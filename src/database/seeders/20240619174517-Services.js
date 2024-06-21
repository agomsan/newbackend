'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/

    await queryInterface.bulkInsert('services', [{
      service_name: 'Tatuajes personalizados',
      description: 'Decide tu tatuaje diseñándolo en conjunto con nuestros artistas'
    },
    {
      service_name: 'Tatuajes de nuestro catálogo',
      description: 'Elige entre los tatuajes de nuestro catálogo el que más te guste'
    },
    {
      service_name: 'Transformación de tu tattoo ya existente',
      description: 'Sabemos que a veces los tatuajes pueden recordarnos a momentos o personas que ya no deseamos recordar, por eso, ofrecemos un servicio para transformar tu antiguo diseño en uno completamente distinto'
    },
    {
      service_name: 'Venta de cremas y otros artículos relacionados',
      description: 'Muchos de nuestros clientes se sorprenden cuando un tatuaje se borra levemente con el tiempo, para que eso nunca ocurra, tenemos a vuestra disposición cremas para mantener tu tatuaje siempre como el primer dia'
    }], {});

  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     **/
    await queryInterface.bulkDelete('services', null, {});

  }
};