'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cad_produtos', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      no_codigo: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      tx_descricao: {
          type: Sequelize.STRING(255),
          allowNull: false
      },
      no_quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      no_valor: {
          type: Sequelize.FLOAT(10,2),
          allowNull: false
      },
      dt_created_at: {
          type: Sequelize.DATE,
          allowNull: true
      },
      dt_updated_at: {
          type: Sequelize.DATE,
          allowNull: true
      }
    },
    {
      schema: 'teste_produtos',
      tableName: 'cad_produtos'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cad_produtos');
  }
};
