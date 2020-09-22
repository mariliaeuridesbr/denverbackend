'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_questions', { 
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'users', key: 'user_id' },
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'questions', key: 'question_id' },
      },
      answer: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user-questions');
  }
};