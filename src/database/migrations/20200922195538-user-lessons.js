'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user-lessons', { 
      lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'lessons', key: 'lesson_id' },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'users', key: 'user_id' },
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-lessons');
  }
};
