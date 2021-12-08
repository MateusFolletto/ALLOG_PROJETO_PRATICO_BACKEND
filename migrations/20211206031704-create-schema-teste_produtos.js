'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('teste_produtos');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('teste_produtos');
  }
};
