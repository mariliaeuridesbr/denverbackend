'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('lessons', { 
      lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      video: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lessons');
  }
};
